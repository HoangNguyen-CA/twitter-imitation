import React, { useEffect } from 'react';
import Users from '../../components/user/Users';
import LoadAsync from '../../components/LoadAsync';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectFollowings,
  selectGetFollowingsStatus,
  selectGetFollowingsError,
  getFollowings,
} from '../../store/slices/userSlice';

function Followings({ username }) {
  const dispatch = useDispatch();
  const followings = useSelector(selectFollowings);
  const status = useSelector(selectGetFollowingsStatus);
  const error = useSelector(selectGetFollowingsError);

  useEffect(() => {
    dispatch(getFollowings(username));
  }, [dispatch, username]);

  return (
    <LoadAsync loading={status === 'loading'} error={error}>
      <Users users={followings}></Users>
    </LoadAsync>
  );
}

export default Followings;