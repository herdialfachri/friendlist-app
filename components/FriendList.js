import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import Contact from '../components/Contact';

const friends = [
  { id: '1', name: 'Wili Septiandi', hobby: 'Bermain Game', age: 25, description: 'Mahasiswa Teknik Informatika Semester 6', telpon: '0856-1234-5678', gambar: { uri: 'https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg' } },
  { id: '2', name: 'Agung Prayoga', hobby: 'Traveling', age: 28, description: 'Mahasiswa Teknik Informatika Semester 7', telpon: '0858-9909-9909', gambar: { uri: 'https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain' } },
  { id: '3', name: 'Agung Syahril', hobby: 'Olahraga', age: 30, description: 'Mahasiswa Teknik Informatika Semester 8', telpon: '0878-0099-0099', gambar: { uri: 'https://cdn-icons-png.flaticon.com/512/204/204191.png' } },
];

const FriendList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Contact 
              gambar={item.gambar} 
              judul={item.name} 
              telpon={item.telpon} 
            />
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Hobby: {item.hobby}</Text>
              <Text style={styles.infoText}>Age: {item.age}</Text>
              <Text style={styles.infoText}>Description: {item.description}</Text>
            </View>
            <Button 
              title="Lihat detail" 
              onPress={() => navigation.navigate('FriendDetail', { friend: item })} 
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  infoContainer: {
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
});

export default FriendList;
