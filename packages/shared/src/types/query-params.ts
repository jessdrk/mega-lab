export type QueryParams = Record<string, string | number | boolean | undefined>;

export type PaginationParams = {
    limit?: number;
    skip?: number;
};

export type SortParams<T> = {
    sortBy?: keyof T;
    order?: 'asc' | 'desc';
};

export type SelectParams = {
    select?: string;
};

export type ListParams<T> = PaginationParams & SortParams<T> & SelectParams;
