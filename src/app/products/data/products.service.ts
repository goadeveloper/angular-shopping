import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data/base-http.service";
import { Observable } from "rxjs";
import { Product } from "../../shared/interfaces/product.interface";

const LIMIT = 4;

@Injectable({ providedIn: 'root' })
export class ProductsService extends BaseHttpService {

    getProducts(page: number):Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiUrl}/products`, {
            params: {
                limit: page * LIMIT
            }
        })
    }

    getProduct(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
    }
}