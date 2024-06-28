import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const FriendDetail = ({ route, navigation }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Image source={friend.gambar} style={styles.image} />
      <Text style={styles.detail}>{friend.name}</Text>
      <Text style={styles.detail}>{friend.hobby}</Text>
      <Text style={styles.detail}>{friend.age}</Text>
      <Text style={styles.detail}>{friend.description}</Text>
      <Button title="Back to List" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666',
  },
});

export default FriendDetail;
