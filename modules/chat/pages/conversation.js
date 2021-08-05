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
import { Ionicons } from '@expo/vector-icons';
import {Header} from '../../../components'
const { width } = Dimensions.get('window');

export default function Conversation({navigation, route}) {
 const { params } = route || {};
  const { item, Friend } = params || {};
  const members = item.members
  const messages= item.messages
  const renderItem = ({ item, index }) => {
    let sendFrom = item.from
    let member = members.filter((i) => i.id === sendFrom)
     return (
      <View
        key={index}
        style={[
          {...styles.cardStyle}, 
          sendFrom === 1 && {flexDirection: 'row-reverse'}  ]
        }
      >
        <Image
          style={{
            width: width * 0.08,
            height: width * 0.08,
            borderRadius:  width * 0.1,
          }}
          source={member[0].avatar}
        />

        <View style={[
          {...styles.contentText}, 
          sendFrom === 1 && {...styles.contentTextRight}
          ]}
        >
          <Text style={styles.nameUser}>
            {item.text}
          </Text>
        </View>

    </View>
    )
  }

  return (
    <View style={styles.container} forceInset={{top: 'always'}}>
      <Header
        onPressLeft={() => {
          navigation.goBack();
        }}
        renderLeft={() => {
          return (
            <Ionicons name="chevron-back" size={30} color="#444" enableRTL={true} />
          );
        }}
        title={Friend.name}
        primaryMode
        style={styles.header}
      />

      <ScrollView style={{flex: 1}}>
        <FlatList
          style={{marginTop: 32}}
          showsVerticalScrollIndicator={true}
          data={messages}
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
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingBottom: 24
  },
  contentText: {
    width: '80%',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },
  contentTextRight: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 6,
  },
  nameUser: {
    fontSize: 13,
    fontWeight: '400',
  }
});
