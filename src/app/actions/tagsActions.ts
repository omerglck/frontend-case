import {createAsyncThunk} from '@reduxjs/toolkit';
import {Tag} from '../../types/apiResponses';
import {getTagsList} from '../../services/getTagsList';

export const fetchTags = createAsyncThunk<Tag[]>('tags/fetchTags', async () => {
  const response = await getTagsList();
  return response.data;
});
