import {ScrollView } from 'react-native';
import React from 'react';
import {SearchInput} from '@/components';

const DiscoveryScreen = ({navigation, route}: any) => {
  return (
    <ScrollView>
      <SearchInput />
    </ScrollView>
  );
};

export default DiscoveryScreen;
