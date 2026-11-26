export type ApiError = NetworkError | ValidationError | AuthError;

export interface NetworkError {
    type: 'network';
    message: string;
    status?: number;
}

export interface ValidationError {
    type: 'validation';
    message: string;
    fields: string[];
}

export interface AuthError {
    type: 'auth';
    message: string;
    status: 401;
}

export function isAuthError(error: unknown): error is AuthError {
    return (
        typeof error === 'object' &&
        error !== null &&
        'type' in error &&
        'message' in error &&
        'status' in error &&
        error.type === 'auth' &&
        error.status === 401 &&
        typeof error.message === 'string'
    );
}
