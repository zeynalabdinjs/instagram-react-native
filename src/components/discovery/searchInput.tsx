import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchInput = () => {
  return (
    <View style={styles.searchBox}>
      <AntDesign name="search1" size={17} style={styles.searchIcon} />
      <TextInput placeholder="Search anything" style={styles.searchInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    marginTop: 3,
    width: '100%',
    height: '100%',
    paddingLeft: 40,
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'center',
    display: 'flex',
  },
  searchIcon: {
    position: 'absolute',
    left: 13,
    top: 10,
  },
});

export default SearchInput;
