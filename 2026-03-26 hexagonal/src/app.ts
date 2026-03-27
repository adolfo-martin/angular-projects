import { RetrieveProductsController } from "./infraestructure/controllers/retrieve-products-controller.ts";

const controller = new RetrieveProductsController();
const products = await controller.runRetrieveProducts();
console.log(products);