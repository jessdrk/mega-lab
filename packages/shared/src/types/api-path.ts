export type ApiPath = LoginPath | ProductsPath | ProductPath | UserCartsPath;

export type LoginPath = '/auth/login';

export type ProductsPath = '/products';
export type ProductPath = `/products/${number}`;
export type UserCartsPath = `/carts/user/${number}`;
