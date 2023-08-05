import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { RetailerItemType } from '../../utils/types';

function useGetRetailersToRender(searchedText: string): RetailerItemType[] | [] {
  const [retailersToRender, setRetailersToRender] = useState<RetailerItemType[] | []>([]);

  const retailersSlice = useSelector((state: RootState) => state.retailersSlice);

  useEffect(() => {
    if (!retailersSlice) {
      return;
    }

    const filteredList = retailersSlice.filter(({ firstName, lastName }: { firstName: string; lastName: string }) => {
      const fullName = `${firstName} ${lastName}`;
      return fullName.startsWith(searchedText);
    });

    setRetailersToRender(filteredList);
  }, [searchedText, retailersSlice]);

  return retailersToRender;
}

export default useGetRetailersToRender;
