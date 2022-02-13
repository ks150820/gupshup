import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

import {handleAddUser} from '../Store/GupShupReducers/PostChatReducer';

const AddChatScreen = props => {
  const [input, setInput] = useState('');
  // const [activeNumber, setActiveNumber] = useState(0);

  const dispatch = useDispatch();

  useLayoutEffect(
    () =>
      props.navigation.setOptions({
        title: 'Add a New User',
        headerBackTitle: 'Chats',
      }),
    [props],
  );

  const createUser = () => {
    const object = new Object();
    object[input] = {messages:[{user:"rahul",id: 12334,msg: "Hi"}]};
    dispatch(handleAddUser(object));
    props.navigation.navigate("Dashboard")
  };

  return (
    <View style={styles.container}>
      <Input
        value={input}
        onChangeText={text => setInput(text)}
        placeholder="Enter a user name"
        leftIcon={<Icon name="wechat" size={24} color="black" />}
        onSubmitEditing={createUser}
      />
      <Button disabled={!input} title="Create new user" onPress={createUser} />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({});
