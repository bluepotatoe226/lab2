import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './components/todolist';
import ToDoForm from './components/todoform';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry', completed: true },
    { id: 2, text: 'Go to gym', completed: false },
    { id: 3, text: 'Walk dog', completed: true },
  ]);

  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, text: taskText, completed: false }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
