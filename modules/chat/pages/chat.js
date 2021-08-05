import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import {Header} from '../../../components'
import {ListChat} from '../../../data'
import { Screen } from '../../../constants';
const { width } = Dimensions.get('window');
export default function Chat({navigation}) {

  const renderItem = ({ item, index }) => {
    let messageLast = (item.messages.length - 1)
    let member = item.members[1]
    let messageUser = item.messages[messageLast]
    
    return (
      <TouchableOpacity
        key={index}
        style={styles.cardStyle}
        activeOpacity={0.9}
        onPress={() => navigation.navigate(Screen.CONVERSATION, {item, Friend: member})}
      >
        <Image
          style={{
            width: width * 0.18,
            height: width * 0.18,
            borderRadius:  width * 0.2,
          }}
          source={member.avatar}
        />

        <View style={styles.contentText}>
          <Text style={styles.nameUser}>
            {member.name}
          </Text>

          <Text style={{ fontSize: 13}}>
            {messageUser.text}
          </Text>
        </View>

    </TouchableOpacity>
    )

  }

  return (
    <View style={styles.container} forceInset={{top: 'always'}}>
      <Header
        title='Chats'
        primaryMode
        style={styles.header}
      />

      <ScrollView style={{flex: 1}}>
        <FlatList
            showsVerticalScrollIndicator={true}
            data={ListChat}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          >
          </FlatList>
      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor:'#ccc',
  },
  cardStyle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor:'#ccc',
    padding: 16
  },
  contentText: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 16
  },
  nameUser: {
    marginBottom: 6,
    fontSize: 13,
    fontWeight: '700',
  }
});
