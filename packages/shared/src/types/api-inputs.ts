import { Product } from './product';
import { User } from './user';

export type ProductCreate = Omit<Product, 'id' | 'rating'>;
export type ProductUpdate = Partial<Product>;

export type ProfileForm = Pick<User, 'email' | 'firstName'>;
