import { CATALOG_NAMES } from '../utils/consts';
import logo from '../shirt.jpg';

export default class ProductAPIClient {
    /*
    static #createFetchRequest(body) {
        const url = `${PRODUCT_API_URL}`;
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
    */

    static #getCatalogType() {
        const url = window.location.href;

        for (let catalogType in CATALOG_NAMES) {
            if (url.includes(catalogType.toLowerCase())) {
                return catalogType;
            }
        }

        return undefined;
    }

    static fetchProductMetadata(location, urlParams) {
        return new Promise((resolve, reject) => {
            // if we directly clicked on a product from the catalog
            if (location.state !== null) {
                return resolve(location.state);
            }
    
            // TODO: try to fetch from DB
            let catalogType = this.#getCatalogType();
            console.log(catalogType);
            console.log(urlParams);
            // need to fetch productName, productImageUrl
    
            // if fetch fails
            reject("Product not found.");
        });
    }

    static fetchProductCatalog(catalogName) {
        return new Promise((resolve, reject) => {
            if (catalogName === CATALOG_NAMES.SHIRTS) {
                // TODO: fetch from DB
                resolve([
                    {name: "Shirt 1", urlParam: "shirt1", imageUrl: logo},
                    {name: "Shirt 2", urlParam: "shirt2", imageUrl: logo},
                    {name: "Shirt 3", urlParam: "shirt3", imageUrl: logo}
                ]);
            }
    
            reject(`Error: Cannot fetch ${catalogName} catalog.`);
        });
    }

    static submitOrder(orderMetadata) {
        return new Promise((resolve, reject) => {
            // TODO: gather order metadata
            // TODO: send text/email notification

            resolve(true);
        });
    }
};