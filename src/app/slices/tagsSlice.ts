import {createSlice} from '@reduxjs/toolkit';
import {fetchTags} from '../actions/tagsActions';
import {Tag} from '../../types/apiResponses';

interface TagsState {
  tags: Tag[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TagsState = {
  tags: [],
  status: 'idle',
  error: null,
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTags.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default tagsSlice.reducer;
