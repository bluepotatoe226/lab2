import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm() {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
      />
      <Button title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginLeft: 8,
  },
});

export default ToDoForm;
