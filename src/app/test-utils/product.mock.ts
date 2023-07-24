import { Product } from "../modules/shared/models/product.mode";

export function productListMock(qtt: number): Product[] {
  let productList: Product[] = [];

  for (let i = 1; i <= qtt; i++) {
    productList.push({
      id: i,
      name: `product ${i}`,
      amount: Math.floor(Math.random() * 50),
      price: Math.floor(Math.random() * 1000),
      brand: `brand ${i}` 
    });
  }

  return productList;
}