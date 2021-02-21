export default class movistarPage {
    //Localizadores

    botonBusqueda = ".icon-search.pnt-js-boton-buscador";
    campoBusqueda = "#myInput";
    textoCuotas = ".details > ul > :nth-child(1)";
    productName = '.product-name';
    filtros ='li > .btn-group > .btn-filter';
    productos=".products-grid"
    cantProductos='.toolbar-bottom > .toolbar > .pager > .count-container > .amount > strong';
    producto='[class=movistar-product-image-clickable]';
    financiacion='#open-modal-installments';
    banco='#selectBank';
    tarjeta='#selectCardByBank';
    tablaCuotas='#bodyTable';
    productosYServicios='div.dnavigation__link > :nth-child(1)';
    servicio='.dnavigation__link';
    botonPlan='.btn.btn-redondo.fondoAzul';
    tipoPlan='.select_linea_text';
    localidad= '#localidad';
    contratar= '#btn-linea-sin-verificar';

    //metodos

    getBusqueda(){
        return cy.get(this.botonBusqueda);
    }
    getCampoBusqueda(){
        return cy.get(this.campoBusqueda);
    }
    getTextoCuotas(){
        return cy.get(this.textoCuotas);
    }
    getProductName(){
        return cy.get(this.productName);
    }
    getFiltros(){
        return cy.get(this.filtros);
    }
    getProductos(){
        return cy.get(this.productos);
    }
    getCantProductos(){
        return cy.get(this.cantProductos);
    }
    getProducto(){
        return cy.get(this.producto);
    }
    getFinanciacion(){
        return cy.get(this.financiacion);
    }
    getBanco(){
        return cy.get(this.banco);
    }
    getTarjeta(){
        return cy.get(this.tarjeta);
    }
    getTablaCuotas(){
        return cy.get(this.tablaCuotas);
    }
    getProductosYServicios(){
        return cy.get(this.productosYServicios);
    }
    getServicio(){
        return cy.get(this.servicio); 
    }
    getBotonPlan(){
        return cy.get(this.botonPlan);
    }
    getTipoPlan(){
        return cy.get(this.tipoPlan);
    }
    getLocalidad(){
        return cy.get(this.localidad)
    }
    getContratar(){
        return cy.get(this.contratar);
    }




}