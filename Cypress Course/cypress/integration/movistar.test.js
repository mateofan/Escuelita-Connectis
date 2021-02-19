/// <reference types="cypress" />

describe('movistar', ()=>{

    beforeEach(()=>{
        cy.visit('https://tienda.movistar.com.ar');
    })

    /*it('CP001-Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A31', ()=>{

        cy.get('.icon-search.pnt-js-boton-buscador').type(' ');
        cy.get('#myInput').type('A31{enter}');
        cy.get('.product-name > a').contains('Galaxy A31');
        cy.get('.button').click()
        cy.get('.details > ul > :nth-child(1)').should('contain','18 cuotas')
        
        
    })
    it('CP002-Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB  //Una sola pagina', ()=>{
        cy.get('li > .btn-group > .btn-filter').click();
        cy.contains('256GB').click();
        cy.get('li > .btn-group > .btn-filter').click();
        cy.contains('Gama Alta').click();
        cy.get('.products-grid').then((res)=>{
            cy.get('.toolbar-bottom > .toolbar > .pager > .count-container > .amount > strong').invoke('text').then((t)=>{
                var text = t.split(" ");
                var phonesFound = parseInt(text[0]);
                expect(res[0].children).to.have.lengthOf(phonesFound);

            })
            
        })
    })
    it('CP003-Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', ()=>{
        cy.get('[class=movistar-product-image-clickable]').eq(2).click();
        cy.get('#open-modal-installments').click();
        cy.get('#selectBank').select('Credicoop');
        cy.get('#selectCardByBank').select('Visa');
        cy.get('#bodyTable').within((elem)=>{
            var table= elem[0];
            for(var i=0; i<table.children.length;i++){
                expect(table.children[i].cells[0].innerText).to.not.equal('60')
            }
        })
    }) */
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

        cy.get('div.dnavigation__link > :nth-child(1)').trigger("mouseover");
        cy.get('.dnavigation__link').contains('Internet').click();
        cy.get('.btn.btn-redondo.fondoAzul').eq(1).click();
        cy.url().should('eq', 'https://ventas.movistar.com.ar/productos/')
        cy.get('.select_linea_text').eq(1).click();
        cy.get('#localidad').type('Av. Córdoba 1646').type('{downarrow}')
        cy.get('#localidad').type('{downarrow}{enter}')
    })

})