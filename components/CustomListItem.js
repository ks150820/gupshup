import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListItem, Avatar} from 'react-native-elements';

const CustomListItem = props => {
  return (
    <ListItem
      bottomDivider
      onPress={() => props.enterChat(props.userName)}
      key={props.id}>
      <Avatar rounded source={require('../Images/avatar.jpeg')} />
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{props.userName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}>
          {props.msg && props.msg}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});
