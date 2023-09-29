import {postListMock} from './postListMock';
import {Post} from './PostTypes';

async function getList(): Promise<Post[]> {
  let response = await fetch('http://192.168.1.108:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer NA.q5hgYGWcsNkgN6IjuhP0v6Qyj0EwdnkIQmPZVCub8Bxb6iYdlGabHkBnU0P6',
    },
  });

  let data = await response.json();
  console.log(data);

  // //TODO: simular um delay na API
  // await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  // return postListMock;

  return postListMock;
}

export const postApi = {
  getList,
};
