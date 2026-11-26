import { AuthResponse, LoginCredentials, LoginPath } from '../types';
import { apiClient } from './api-client';

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
    const endpoint: LoginPath = '/auth/login';
    return apiClient<AuthResponse>(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });
}
