import {configureStore} from '@reduxjs/toolkit';
import tagsReducer from './slices/tagsSlice';
import promotionsReducer from './slices/promotionsSlice';
import promotionDetailReducer from './slices/promotionDetailSlice';
const store = configureStore({
  reducer: {
    tags: tagsReducer,
    promotions: promotionsReducer,
    promotionDetail: promotionDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
