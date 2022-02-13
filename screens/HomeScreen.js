import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = props => {
  const getUser = useSelector(state => state.entities.chat.chat);

  useLayoutEffect(
    () =>
      props.navigation.setOptions({
        title: 'GupShup',
        headerLeft: () => (
          <View style={{marginRight: 10}}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => props.navigation.toggleDrawer()}
              style={styles.menuBar}>
              <Avatar source={require('../Images/AvatarOne.jpeg')} rounded />
              <Ionicons name="menu" size={15} style={styles.menuIcon} />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => (
          <View style={styles.headerRight}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => props.navigation.navigate('AddUser')}>
              <Ionicons name="person-add-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        ),
      }),
    [props],
  );

  const enterChat = username => {
    props.navigation.navigate('Chat', {username: username});
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="tomato" />
      <ScrollView style={styles.container}>
        {getUser &&
          getUser.map((item, index) => {
            const length = item[Object.keys(item)[0]].messages.length - 1;
            const msgs = item[Object.keys(item)[0]].messages;
            return (
              <CustomListItem
                key={index}
                enterChat={enterChat}
                userName={Object.keys(item)[0]}
                msg={msgs[length].msg}
                id={index}
              />
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  headerRight: {
    flexDirection: 'row',
    marginRight: 5,
  },
  menuBar: {
    position: 'relative',
  },
  menuIcon: {
    color: '#fff',
    bottom: -6,
    right: -3,
    fontWeight: 'bold',
    zIndex: 1099,
    position: 'absolute',
  },
});
