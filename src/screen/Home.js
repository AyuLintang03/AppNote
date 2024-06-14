import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import CustomButton from '../components/customButton'

const NoteCard = ({ item, setCurrentPage, deleteNote, setSelectedNote }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#1679AB"
        color="white"
        fontWeight="bold"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          setCurrentPage('edit');
          setSelectedNote(item);
        }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => deleteNote(item.id)}
      />
    </View>
  </View>
)

const Home = ({ noteList, setCurrentPage, deleteNote, setSelectedNote }) => (
  
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <CustomButton
        backgroundColor="#102C57"
        color="white"
        shadowColor="#000"
        text="Tambahkan Note"
        width="100%"
        onPress={() => {
          setCurrentPage('add')
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={noteList}
        renderItem={({ item }) => (
          <NoteCard item={item} setCurrentPage={setCurrentPage} deleteNote={deleteNote} setSelectedNote={setSelectedNote} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  
  wrapper:{
    flex: 1,
    backgroundColor: '#FFCBCB',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: '#DDD',
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 8,
    borderWidth: 2,
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#203239',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

export default Home
