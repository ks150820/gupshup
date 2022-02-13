import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useLayoutEffect, useState, useEffect} from 'react';

import {Avatar} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {handleChats} from '../Store/GupShupReducers/PostChatReducer';

const ChatScreen = props => {
  const [input, setInput] = useState('');
  const [activeNumber, setActiveNumber] = useState(0);
  const [userData, setUserData] = useState([]);

  const dispatch = useDispatch();

  const getUserDetails = useSelector(state => state.entities.chat.chat);

  const userName = props.route.params && props.route.params.username;

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar rounded source={require('../Images/AvatarOne.jpeg')} />
          <Text style={{marginLeft: 5, fontWeight: '700', color: '#fff'}}>
            {userName}
          </Text>
        </View>
      ),
    });
  }, [props]);

  useEffect(() => {
    let filterData;
    if (getUserDetails.length > 0) {
      filterData = getUserDetails.filter(
        (item, index) => item && Object.keys(item)[0] == userName,
      );
    }

    const first = filterData[0];
    setUserData(first[userName].messages);
  }, [getUserDetails, setUserData]);

  const handleSendChat = () => {
    let num = activeNumber + 1;
    const chat = {
      user: userName,
      id: num,
      msg: input,
    };
    setActiveNumber(num);

    dispatch(handleChats(chat));
    setInput('');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {/* {getUserDetail()} */}
      <StatusBar backgroundColor="tomato" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
        keyboardVerticalOffset={130}>
        <TouchableWithoutFeedback>
          <>
            <ScrollView contentContainerStyle={{paddingTop: 15}}>
              {userData.map((item, index) =>
                item.user === userName ? (
                  <View style={styles.reciever} key={item.id}>
                    <Avatar
                      source={require('../Images/AvatarOne.jpeg')}
                      rounded
                      size={30}
                      bottom={-12}
                      right={-5}
                      position="absolute"
                    />
                    <Text style={styles.recieverText}>{item?.msg}</Text>
                  </View>
                ) : (
                  <View style={styles.sender} key={item.id}>
                    <Avatar
                      source={require('../Images/AvatarOne.jpeg')}
                      rounded
                      size={30}
                      bottom={-10}
                      right={-10}
                      position="absolute"
                    />
                    <Text style={styles.senderText}>{item?.msg}</Text>
                    <Text style={styles.senderName}>{item?.user}</Text>
                  </View>
                ),
              )}
            </ScrollView>
            <View style={styles.footer}>
              <TextInput
                value={input}
                onChangeText={text => setInput(text)}
                style={styles.textinput}
                placeholder="GupShup chat"
                onSubmitEditing={() => handleSendChat()}
              />
              <TouchableOpacity activeOpacity={0.5} onPress={handleSendChat}>
                <Ionicons name="send" size={24} color="tomato" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
  textinput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: 'transparent',
    backgroundColor: '#ECECEC',
    borderWidth: 1,
    padding: 10,
    color: 'grey',
    borderRadius: 10,
  },
  reciever: {
    padding: 15,
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: '80%',
    position: 'relative',
  },
  sender: {
    padding: 15,
    backgroundColor: '#2B68E6',
    alignSelf: 'flex-start',
    borderRadius: 20,
    margin: 15,
    maxWidth: '80%',
    position: 'relative',
  },
  senderName: {
    left: 10,
    paddingRight: 10,
    fontSize: 10,
    color: '#fff',
    marginTop: 0,
  },
  senderText: {
    color: '#fff',
    fontWeight: '500',
    marginLeft: 10,
    marginBottom: 5,
  },
  recieverText: {
    fontWeight: '600',
    color: 'black',
    marginLeft: 10,
  },
});
