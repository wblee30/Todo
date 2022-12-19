import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import TaskModal from '../components/TaskModal';

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <TodoItem title="앱 개발하기" done={false}/>
        <TodoItem title="육아하기" done={true}/>
        <TaskModal isVisible={false}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


