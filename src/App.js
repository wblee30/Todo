import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import TaskModal from '../components/TaskModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends React.Component {
  state = {
    todos: [{
      title: '나만의 메모를 기록해보세요',
      done: false,
    },
    {
      title: '첫 메모 기록하기',
      done: true,
    }
  ],
    showModal: false,
  };

  componentDidMount() {
    AsyncStorage.getItem('@todos:state').then((state) => {
      this.setState(JSON.parse(state))
    })
  }
  save = () => {
    AsyncStorage.setItem('@todos:state', JSON.stringify(this.state))
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header 
          show={() => {
            this.setState({ showModal: true})
          }}
        />
        <FlatList
          data = {this.state.todos}
          renderItem={({item, index}) => {
            return(
              <TodoItem 
                title={item.title}
                done={item.done}
                remove={() => {
                   this.setState({
                      todos: this.state.todos.filter((_, i) => i != index)
                   }, this.save)
                }}
                toggle={() => {
                  const newTodos = [...this.state.todos]
                  newTodos[index].done = !newTodos[index].done
                  this.setState({ todos: newTodos}, this.save)
                }}
              />
            )
          }}
          keyExtractor={(_, index) => {
            return `${index}`
          }}
        />
        <TaskModal 
          isVisible={this.state.showModal}
          add={(title) => {
              this.setState({
                todos: this.state.todos.concat({
                  title: title,
                  done: false,
                }),
                showModal: false,
              }, this.save )
          }}
          hide={() => {
              this.setState({ showModal: false})
          }}
          />
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


