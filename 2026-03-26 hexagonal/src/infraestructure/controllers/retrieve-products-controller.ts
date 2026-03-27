import { RetrieveProductsUsecase } from "../../application/use-cases/retrieve-products-usecase.ts";
import { Product } from "../../domain/models/product.ts";
import { RestService } from "../services/rest-service.ts";
import { ControllerException } from "./controller-exception.ts";

export class RetrieveProductsController {

    async runRetrieveProducts(): Promise<Product> {
        try {
            const restService = new RestService();
            const usecase = new RetrieveProductsUsecase(restService);
            const products = await usecase.execute({});
            return products;
        } catch (error) {
            throw new ControllerException((error as Error).message);
        }
    }

}