import { useDispatch } from 'react-redux';
import { updateRetailersData, useGetRetailersQuery } from '../../store/slices/retailersSlice';
import { useEffect } from 'react';

function useFetchRetailersData() {
  const { data } = useGetRetailersQuery(100);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      return;
    }

    dispatch(updateRetailersData(data.users));
  }, [data, dispatch]);
}

export default useFetchRetailersData;
