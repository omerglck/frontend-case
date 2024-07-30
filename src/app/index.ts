import {configureStore} from '@reduxjs/toolkit';
import tagsReducer from './slices/tagsSlice';
import promotionsReducer from './slices/promotionsSlice';

const store = configureStore({
  reducer: {
    tags: tagsReducer,
    promotions: promotionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
