import {createSlice} from '@reduxjs/toolkit';
import {fetchPromotions} from '../actions/promotionsActions';
import {Promotion} from '../../types/apiResponses';

interface PromotionsState {
  promotions: Promotion[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PromotionsState = {
  promotions: [],
  status: 'idle',
  error: null,
};

const promotionsSlice = createSlice({
  name: 'promotions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPromotions.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPromotions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.promotions = action.payload;
      })
      .addCase(fetchPromotions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default promotionsSlice.reducer;
