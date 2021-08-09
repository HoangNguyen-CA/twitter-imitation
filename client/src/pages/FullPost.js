import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from './APIUtils';
import Spinner from '../components/Spinner';

import Post from '../components/Post';

function FullPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

  let element;
  if (error) {
    element = error;
  } else if (!post) {
    element = <Spinner />;
  } else {
    element = <Post {...post} />;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPost(id);
        setPost(res.data);
      } catch (e) {
        setError(true);
      }
    };

    fetchData();
  }, [id]);
  return element;
}

export default FullPost;
