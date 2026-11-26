import { Cart } from './cart';
import { PaginatedResponse } from './pagination';
import { Product } from './product';
import { User } from './user';

export type ApiResponse<T, K extends string | undefined = undefined> =
    T extends Array<infer R> ? (K extends string ? PaginatedResponse<K, R> : never) : T;

export type ProductsResponse = ApiResponse<Product[], 'products'>;
export type UsersResponse = ApiResponse<User[], 'users'>;
export type CartsResponse = ApiResponse<Cart[], 'carts'>;
