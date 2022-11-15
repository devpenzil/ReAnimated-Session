import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import PlusIcon from '../../assets/PlusIcon';
import Trash from '../../assets/Trash';
import Animated, {SlideInLeft} from 'react-native-reanimated';

const AnimationOne = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const addItem = () => {
    setTodos(temptodo => [...temptodo, {todoitem: todo}]);
    setTodo('');
  };
  const deleteTodo = id => {
    setTodos(todos.filter((_, index) => index !== id));
  };
  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={style.headarea}>
          <TextInput
            value={todo}
            placeholder="Input your todo"
            style={style.input}
            onChangeText={e => {
              setTodo(e);
            }}
          />
          <TouchableOpacity style={style.plusicon} onPress={addItem}>
            <PlusIcon />
          </TouchableOpacity>
        </View>
        <FlatList
          renderItem={({item, index}) => {
            return (
              <>
                <Animated.View entering={SlideInLeft} style={style.card}>
                  <Text>{item.todoitem}</Text>
                  <TouchableOpacity
                    style={style.plusicon}
                    onPress={() => {
                      deleteTodo(index);
                    }}>
                    <Trash />
                  </TouchableOpacity>
                </Animated.View>
              </>
            );
          }}
          data={todos}
        />
      </View>
    </SafeAreaView>
  );
};

export default AnimationOne;
