import { Product } from "../../shared/models/product.mode";

export interface ProductsResponse {
  page: number;
  size: number;
  toral: number;
  records: Product[]
}