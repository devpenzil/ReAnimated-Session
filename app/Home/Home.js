import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.card}
        onPress={() => {
          navigation.navigate('animationOne');
        }}>
        <Text>To Do List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.card}
        onPress={() => {
          navigation.navigate('animationTwo');
        }}>
        <Text>Swipe Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  card: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#FBFBFF',
    marginTop: 10,
  },
});
