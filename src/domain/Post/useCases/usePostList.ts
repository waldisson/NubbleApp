import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  async function fechData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(page);
      setPage(prev => prev + 1);
      setPostList(prev => [...prev, ...list]);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    fechData();
  }

  useEffect(() => {
    if (!loading) {
      fechData();
    }
  }, []);

  return {
    postList,
    error,
    loading,
    refetch: fechData,
    fetchNextPage,
  };
}
