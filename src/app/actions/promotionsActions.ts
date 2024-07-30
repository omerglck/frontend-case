import {createAsyncThunk} from '@reduxjs/toolkit';

import {Promotion} from '../../types/apiResponses';
import {getPromotionsList} from '../../services/getPromotionsList';

export const fetchPromotions = createAsyncThunk<Promotion[]>(
  'promotions/fetchPromotions',
  async () => {
    const response = await getPromotionsList();
    return response.data;
  },
);
