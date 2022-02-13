import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import Card from '../components/Card';

const AboutUsScreen = props => {
  useLayoutEffect(
    () =>
      props.navigation.setOptions({
        title: 'About Us',
        headerLeft: () => (
          <View style={{marginRight: 10}}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.menuBar}
              onPress={() => props.navigation.toggleDrawer()}>
              <Avatar source={require('../Images/AvatarOne.jpeg')} rounded />
              <Icon name="menu" size={15} style={styles.menuIcon} />
            </TouchableOpacity>
          </View>
        ),
      }),
    [props],
  );

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerTextOne}>GupShup</Text>
        <Text style={styles.headerTextTwo}>
          ( Exploring new chat experience with GupShup )
        </Text>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('Home')}>
          <View style={styles.button}>
            <Text>Start chatting</Text>
            <Icon name="ios-arrow-forward" size={20} style={styles.icon} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.cardComponent}>
        <Card
          title="Explore New Chat Behaviour"
          imageUrl={require('../Images/chatDashboard.jpg')}
          width="100%"
          height="70%"
        />
      </View>
    </View>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(255, 99, 57, 0.9)',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '2%',
    paddingBottom: '10%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
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
  headerTextOne: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
  },
  headerTextTwo: {
    color: '#fff',
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    // backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '40%',
    flexDirection: 'row',
  },
  icon: {
    color: '#ffff',
  },
  cardComponent: {
    marginTop: '10%',
    flex: 1,
  },
});
