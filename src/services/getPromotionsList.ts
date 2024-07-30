import {AxiosResponse} from 'axios';
import api from './apiClient';
import {Promotion} from '../types/apiResponses';

export const getPromotionsList = async (): Promise<
  AxiosResponse<Promotion[]>
> => {
  return api.get<Promotion[]>(`/promotions/list?Channel=PWA`);
};
