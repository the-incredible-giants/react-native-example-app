import React, { useState } from 'react';
import { StyleSheet, TextInput, FlatList } from 'react-native';
import RetailerItem from './RetailerItem';
import useFetchRetailersData from './useFetchRetailersData';
import useGetRetailersToRender from './useGetRetailersToRender';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mainStyles } from '../../utils/mainStyles';

function Retailers(): JSX.Element {
  useFetchRetailersData();
  const [searchedText, setSearchedText] = useState('');
  const retailersToRender = useGetRetailersToRender(searchedText);

  return (
    <SafeAreaView style={mainStyles.centeredView}>
      <TextInput
        style={styles.searchInput}
        onChangeText={(newText) => setSearchedText(newText)}
        placeholder="Search for retailers..."
        placeholderTextColor="gray"
      />

      <FlatList
        data={retailersToRender}
        renderItem={(retailer) => <RetailerItem {...retailer} />}
        keyExtractor={({ id }) => String(id)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '95%',
    color: 'black',
    backgroundColor: 'white',
    marginBottom: 20,
  },
});

export default Retailers;
