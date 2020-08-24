import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useForm} from 'react-hook-form';
import firebase from '../api/firebase';

import {Input, InputError} from '../atoms';

const inputStyle = {
  borderWidth: 1,
  width: '85%',
};

const ToDoForm = () => {
  const {control, handleSubmit, errors} = useForm();

  const todosRef = firebase.firestore().collection('todos');

  const addToDo = async ({text}) => {
    console.log(text);
    try {
      await todosRef.add({text});
      console.log('added');
    } catch (err) {
      console.log(err.message);
    } finally {
      console.log('completed');
    }
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Input
          name="text"
          control={control}
          placeholder="Buy groceries"
          rules={{required: true}}
          style={inputStyle}
        />
        <Button title="Add" onPress={handleSubmit(addToDo)} />
      </View>
      <InputError text="Plase enter some text" error={errors.text} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export {ToDoForm};
