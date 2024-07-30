import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {PromotionDetail} from '../../types/apiResponses';
import {getPromotionById} from '../../services/getPromotionById';

export const fetchPromotionById = createAsyncThunk(
  'promotionDetail/fetchById',
  async (id: string) => {
    const response: AxiosResponse<PromotionDetail> = await getPromotionById(id);
    return response.data;
  },
);
