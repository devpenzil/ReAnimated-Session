import {View, SafeAreaView, Image, Pressable} from 'react-native';
import React from 'react';
import {style} from './style';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const AnimationTwo = () => {
  const CARDONE = require('../../assets/Cardone.png');
  const CARDTWO = require('../../assets/Cardtwo.png');
  const CARDTHREE = require('../../assets/Cardthree.png');
  const CARD = require('../../assets/Crads.png');
  const SWITCH = useSharedValue(false);
  console.log(SWITCH);
  const maincard = useAnimatedStyle(() => {
    return {
      height: 200,
      width: 315,
      resizeMode: 'stretch',
      position: 'absolute',
      transform: [
        {
          rotateZ: SWITCH.value ? withSpring('0deg') : withSpring('90deg'),
        },
      ],
      top: SWITCH.value ? withSpring(0) : withSpring(340),
      left: SWITCH.value ? withSpring(20) : withSpring(0),
    };
  });
  const subCard = useAnimatedStyle(() => {
    return {
      height: 200,
      width: 315,
      resizeMode: 'stretch',
      position: 'absolute',
      transform: [
        {
          rotateZ: '90deg',
        },
      ],
      top: 340,
    };
  });
  const cardOne = useAnimatedStyle(() => {
    return {
      left: SWITCH.value ? withSpring(-520) : withSpring(0),
    };
  });
  const cardTwo = useAnimatedStyle(() => {
    return {
      left: SWITCH.value ? withSpring(520) : withSpring(0),
    };
  });
  const detailsCard = useAnimatedStyle(() => {
    return {
      top: SWITCH.value ? withSpring(220) : withSpring(1000),
    };
  });
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Pressable>
          <Animated.Image source={CARDONE} style={[subCard, cardOne]} />
        </Pressable>
        <Pressable>
          <Animated.Image source={CARDTWO} style={[subCard, cardTwo]} />
        </Pressable>
        <Pressable
          onPress={() => {
            SWITCH.value = !SWITCH.value;
          }}>
          <Animated.Image source={CARDTHREE} style={[maincard]} />
        </Pressable>
        <Animated.Image source={CARD} style={[detailsCard]} />
      </View>
    </SafeAreaView>
  );
};

export default AnimationTwo;
