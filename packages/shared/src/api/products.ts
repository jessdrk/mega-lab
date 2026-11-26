import { Product, ProductPath, ProductsPath, ProductsResponse } from '../types';
import { ListParams } from '../types/query-params';
import { apiClient } from './api-client';

export async function getProduct(id: number): Promise<Product> {
    const endpoint: ProductPath = `/products/${id}`;
    return apiClient<Product>(endpoint, { method: 'GET' });
}

export async function getProducts(params: ListParams<Product>): Promise<ProductsResponse> {
    const endpoint: ProductsPath = '/products';
    return apiClient<ProductsResponse>(endpoint, { method: 'GET' }, params);
}
