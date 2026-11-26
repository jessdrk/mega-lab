import { CartsResponse, UserCartsPath } from '../types';
import { apiClient } from './api-client';

export async function getUserCarts(userId: number): Promise<CartsResponse> {
    const endpoint: UserCartsPath = `/carts/user/${userId}`;
    return apiClient<CartsResponse>(endpoint, { method: 'GET' });
}
