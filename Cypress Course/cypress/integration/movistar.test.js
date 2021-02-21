/// <reference types="cypress" />
const MovistarPage = require("../pageObjects/movistarPage");


describe('movistar', ()=>{
    const movistarPage = new MovistarPage();

    beforeEach(()=>{
        cy.visit('https://tienda.movistar.com.ar');
    })

    it('CP001-Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A31', ()=>{

        movistarPage.getBusqueda().type(' ');
        movistarPage.getCampoBusqueda().type('A31{enter}');
        movistarPage.getProductName().contains('Galaxy A31').click();
        movistarPage.getTextoCuotas().should('contain','18 cuotas')
        
        
    })
    it('CP002-Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB  //Una sola pagina', ()=>{
        movistarPage.getFiltros().click();
        cy.contains('256GB').click();
        movistarPage.getFiltros().click();
        cy.contains('Gama Alta').click();
        movistarPage.getProductos().then((res)=>{
            movistarPage.getCantProductos().invoke('text').then((t)=>{
                var text = t.split(" ");
                var phonesFound = parseInt(text[0]);
                expect(res[0].children).to.have.lengthOf(phonesFound);

            })
            
        })
    })
    it('CP003-Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', ()=>{
        movistarPage.getProducto().eq(2).click();
        movistarPage.getFinanciacion().click();
        movistarPage.getBanco().select('Credicoop');
        movistarPage.getTarjeta().select('Visa');
        movistarPage.getTablaCuotas().within((elem)=>{
            var table= elem[0];
            for(var i=0; i<table.children.length;i++){
                expect(table.children[i].cells[0].innerText).to.not.equal('60')
            }
        })
    }) 
    it('CP004-Revisar si puedo contratar internet', ()=>{

        /*
        Descripción: El objetivo es visitar la tienda de movistar, luego ingresar
        a la parte de productos y servicios e ingresar a internet, seleccionar el segundo plan y
        elegir 'No tengo linea', completar una direccion y poner siguiente.
        Resultado esperado:
        -Que se pueda ingresar a la pagina
        -Verificar que el url sea correcto
        -Que de una respuesta sobre la direccion seleccionada

        */

        movistarPage.getProductosYServicios().trigger("mouseover");
        movistarPage.getServicio().contains('Internet').click();
        movistarPage.getBotonPlan().eq(1).click();
        cy.url().should('eq', 'https://ventas.movistar.com.ar/productos/')
        movistarPage.getTipoPlan().eq(1).click();
        movistarPage.getLocalidad().type('Av. Córdoba 1646{downarrow}{enter}').type('{downarrow}')
        //Falta solucionar problema con el autocomplete
        movistarPage.getContratar().click();
        cy.get('body').then(($body)=>{
            if($body.find("#offert-list").length > 0){
                cy.log("=== Prueba superada ===")
            }else{
                throw new Error ("No es posible contratar el plan")
            }
        })
    })

})