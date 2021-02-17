/// <reference types="cypress" />

describe('movistar', ()=>{

    beforeEach(()=>{
        cy.visit('https://tienda.movistar.com.ar');
    })

    it('A10s con cuotas', ()=>{
        var cantCuotas = 12;
        cy.get('.icon-search.pnt-js-boton-buscador').type(' ');
        cy.get('#myInput').type('A10s{enter}');
        cy.get('.product-name > a').contains('Galaxy A10');
        cy.get('.button').click()
        cy.get('.details > ul > :nth-child(1)').contains('cuotas').invoke('text').should((text1)=>{
            var res = text1.split(" ");
            var cuotas = parseInt(res[1])
            if(cuotas < 12){
                throw new Error('El producto no soporta un minimo de 12 cuotas sin interes');
            }
        }) 
        
    })
    it('Alta Gama', ()=>{
        cy.get('li > .btn-group > .btn-filter').click();
        cy.contains('256GB').click();
        cy.get('li > .btn-group > .btn-filter').click();
        cy.contains('Gama Alta').click();

    })

})