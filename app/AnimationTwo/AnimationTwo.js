import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {style} from './style';

const AnimationTwo = () => {
  const CARDONE = require('../../assets/Cardone.png');
  const CARDTWO = require('../../assets/Cardtwo.png');
  const CARDTHREE = require('../../assets/Cardthree.png');
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Image source={CARDONE} style={[style.debit, {right: 100, top: 340}]} />
        <Image source={CARDTWO} style={[style.debit, {left: 100, top: 340}]} />
        <Image source={CARDTHREE} style={[style.debit]} />
      </View>
    </SafeAreaView>
  );
};

export default AnimationTwo;
