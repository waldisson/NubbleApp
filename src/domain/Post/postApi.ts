import {PageAPI, api} from '@api';

import {PostAPI} from './PostTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('user/post');
  return response.data;
}

export const postApi = {
  getList,
};
