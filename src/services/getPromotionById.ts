import {AxiosResponse} from 'axios';
import api from './apiClient';
import {PromotionDetail} from '../types/apiResponses';

export const getPromotionById = async (
  id: string,
): Promise<AxiosResponse<PromotionDetail>> => {
  return api.get<PromotionDetail>(`/promotions?Id=${id}`);
};
