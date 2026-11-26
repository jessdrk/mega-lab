import { ApiPath, AuthError, NetworkError, QueryParams, ValidationError } from '../types';

export async function apiClient<T>(endpoint: ApiPath, options?: RequestInit, params?: QueryParams): Promise<T> {
    const baseUrl: string = 'https://dummyjson.com';
    const link: URL = new URL(endpoint, baseUrl);

    Object.keys(params ?? {}).forEach((name: string) => {
        const value = params?.[name];
        if (value !== undefined) {
            link.searchParams.append(name, String(value));
        }
    });

    const headers: Headers = new Headers(options?.headers);
    if (!headers.has('Accept')) {
        headers.set('Accept', 'application/json');
    }
    const resultOptions = { ...options, headers };
    return fetch(link, resultOptions)
        .catch(() => {
            const networkError: NetworkError = {
                type: 'network',
                message: 'Network request failed',
            };
            throw networkError;
        })
        .then((response) => {
            if (!response.ok) {
                switch (response.status) {
                    case 401: {
                        const authError: AuthError = {
                            type: 'auth',
                            message: 'Auth problem',
                            status: response.status,
                        };
                        throw authError;
                    }
                    case 422: {
                        const validationError: ValidationError = {
                            type: 'validation',
                            fields: [],
                            message: 'Validation problem',
                        };
                        throw validationError;
                    }
                    default: {
                        const networkError: NetworkError = {
                            type: 'network',
                            message: `HTTP error ${response.status}`,
                            status: response.status,
                        };
                        throw networkError;
                    }
                }
            }
            return response.json();
        })
        .then((data: unknown) => data as T);
}
