import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Rect, Line} from 'react-native-svg';

const PlusIcon = () => {
  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-plus-square">
        <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <Line x1="12" y1="8" x2="12" y2="16" />
        <Line x1="8" y1="12" x2="16" y2="12" />
      </Svg>
    </>
  );
};

export default PlusIcon;
