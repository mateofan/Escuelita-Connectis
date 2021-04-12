export default class movistarPage {
    //Localizadores

    productosYServicios='div.dnavigation__link > :nth-child(1)';
    servicio='.dnavigation__link';
    urlTelevision= 'television/planes';
    negocios='.navigation-secondary__item';
    precioDescontado='.price.text42';
    precioFinal='.mes.text18.fontGris';
    urlNegocios='negocios';
    solapas=".dnavigation__item";

    //metodos


    getProductosYServicios(){
        return cy.get(this.productosYServicios);
    }
    getServicio(){
        return cy.get(this.servicio); 
    }
    checkTelevision(){
        return cy.url().should('include', this.urlTelevision);
    }
    checkNegocios(){
        return cy.url().should('include', this.urlNegocios);
    }
    getNegocios(){
        return cy.get(this.negocios);
    }
    getPrecioDescontado(){
        return cy.get(this.precioDescontado);
    }
    getPrecioFinal(){
        return cy.get(this.precioFinal);
    }
    getSolapas(){
        return cy.get(this.solapas);
    }
    



}