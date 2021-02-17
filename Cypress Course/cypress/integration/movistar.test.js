/// <reference types="cypress" />

describe('movistar', ()=>{

    beforeEach(()=>{
        cy.visit('https://tienda.movistar.com.ar');
    })

    it('A31 con cuotas', ()=>{

        cy.get('.icon-search.pnt-js-boton-buscador').type(' ');
        cy.get('#myInput').type('A31{enter}');
        cy.get('.product-name > a').contains('Galaxy A31');
        cy.get('.button').click()
        cy.get('.details > ul > :nth-child(1)').contains('cuotas').should('have.text', 'Hasta 18 cuotas sin interés con tarjetas seleccionadas')
        
        
    })
    it('Alta Gama', ()=>{
        cy.get('li > .btn-group > .btn-filter').click();
        cy.contains('256GB').click();
        cy.get('li > .btn-group > .btn-filter').click();
        cy.contains('Gama Alta').click();

    })

})