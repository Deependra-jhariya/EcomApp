import { RootState } from '../../store';

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectProductLoading = (state: RootState) => state.products.loading;
export const selectProductError = (state: RootState) => state.products.error;
