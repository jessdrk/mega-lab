import { User } from './user';

export type FormFields<T> = {
    [K in keyof T]: {
        value: T[K];
        error: string | null;
        touched: boolean;
    };
};

export type UserFormFields = FormFields<User>;
