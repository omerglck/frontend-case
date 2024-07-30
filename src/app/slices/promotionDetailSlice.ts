import {createSlice} from '@reduxjs/toolkit';
import {PromotionDetail} from '../../types/apiResponses';
import {fetchPromotionById} from '../actions/promotionDetailActions';

interface PromotionDetailState {
  promotionDetail: PromotionDetail | null;
  loading: boolean;
  error: string | null;
}

const initialState: PromotionDetailState = {
  promotionDetail: null,
  loading: false,
  error: null,
};

const promotionDetailSlice = createSlice({
  name: 'promotionDetail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPromotionById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPromotionById.fulfilled, (state, action) => {
        state.loading = false;
        state.promotionDetail = action.payload;
      })
      .addCase(fetchPromotionById.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || 'Failed to fetch promotion detail';
      });
  },
});

export default promotionDetailSlice.reducer;
