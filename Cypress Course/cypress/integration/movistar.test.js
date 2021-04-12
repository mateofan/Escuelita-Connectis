/// <reference types="cypress" />
const MovistarPage = require("../pageObjects/movistarPage");
const productsToCheck = require("../fixtures/enviroment.json").products;

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  


describe('movistar', ()=>{
    const movistarPage = new MovistarPage();

    beforeEach(()=>{
        cy.visit('https://tienda.movistar.com.ar');
    })

    it('Planes de TV', ()=>{

        movistarPage.getProductosYServicios().trigger("mouseover");
        movistarPage.getServicio().contains('Planes de TV').click();
        movistarPage.checkTelevision();
        var planes = [];
        var lengthPreciosDescontados = 0
        movistarPage.getPrecioDescontado().each(($el, index, $list)=>{
            lengthPreciosDescontados++;
            var text = $el[0].innerText;
            var res = text.replace(/\D/g, "");
            planes.push({
                precioDescontado : res
            })
    
        })
        movistarPage.getPrecioFinal().each(($el, index, $list)=>{
            
            var text = $el[0].innerText;
            var res = text.replace(/\D/g, "");
            planes[index] = {
                precioDescontado : planes[index].precioDescontado,
                precioFinal : res
            }
        }).then(($list)=>{
            expect(lengthPreciosDescontados).to.equal(planes.length); //Para evitar el hipotetico caso que este mal cargado un plan sin descuento
            expect(planes.length).to.be.at.least(3);
            for(let i = 0; i < planes.length; i++){
            cy.log(`Plan numero ${i+1} valor descontado: ${planes[i].precioDescontado} valor final: ${planes[i].precioFinal}`)
            }
        })


    })

    it('Negocios', ()=>{

        movistarPage.getNegocios().eq(1).click();
        movistarPage.checkNegocios();
        movistarPage.getSolapas().should('contain', "Tienda").and('contain', "Productos y Servicios").and("contain", "Ayuda").and("contain", "Beneficios");
        movistarPage.getProductosYServicios().trigger("mouseover");
        movistarPage.getServicio().then(($el)=>{
            
            for (let i = 0; i < productsToCheck.length; i++){
                expect($el).to.not.contain(productsToCheck[i])
            }
        })
    })
    

})