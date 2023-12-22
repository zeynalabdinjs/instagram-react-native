import {ScrollView} from 'react-native';
import React from 'react';
import {SearchInput} from '@/components';
import {DiscoveryContainer} from '@/components';

const DiscoveryScreen = ({navigation, route}: any) => {
  return (
    <ScrollView>
      <SearchInput />
      <DiscoveryContainer />
    </ScrollView>
  );
};

export default DiscoveryScreen;
