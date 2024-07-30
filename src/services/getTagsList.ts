import {AxiosResponse} from 'axios';
import api from './apiClient';
import {Tag} from '../types/apiResponses';

export const getTagsList = async (): Promise<AxiosResponse<Tag[]>> => {
  return api.get<Tag[]>('/tags/list');
};
