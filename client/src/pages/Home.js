import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  getPosts,
  selectPosts,
  selectGetPostsStatus,
} from '../store/slices/postSlice';

import Post from '../components/Post';
import Spinner from '../components/Spinner';
import Layout from '../components/Layout';

const Container = styled.div`
  & > * {
    margin-top: 1em;
  }
`;

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const getPostsStatus = useSelector(selectGetPostsStatus);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Layout header='Home'>
      <Container>
        {getPostsStatus === 'loading' ? (
          <Spinner />
        ) : (
          posts.map(({ _id, ...fields }) => (
            <Post key={_id} _id={_id} {...fields} />
          ))
        )}
      </Container>
    </Layout>
  );
}

export default Home;
