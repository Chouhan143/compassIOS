import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

const useNetInfo = () => {
  const [isConnected, setIsConnected] = useState(false); // Default to true or false based on your requirement

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return isConnected;
};
export default useNetInfo;
