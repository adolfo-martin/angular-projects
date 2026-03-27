import type { IRestService } from "../ports/rest-service.ts";
import { type IUsecase, UsecaseException } from "./usecase.ts";

export class RetrieveProductsUsecase implements IUsecase {
    private readonly _restService: IRestService;

    public constructor(restService: IRestService) {
        this._restService = restService;
    }

    async execute(options: any): Promise<any> {
        try {
            const products = await this._restService.retrieveProducts();
            return products;
        } catch (error) {
            throw new UsecaseException((error as Error).message);
        }
    }
}