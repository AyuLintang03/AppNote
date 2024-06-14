import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

// Tambahkan function addNote sebagai sebuah prop
const AddNote = ({ setCurrentPage, addNote }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.pageTitle}>Tambahkan Note</Text>
        <CustomTextInput
          text={title}
          onChange={setTitle}
          label="Judul"
          placeholder="Judul"
          numberOfLines={1}
          multiline={false}
        />
        <CustomTextInput
          text={desc}
          onChange={setDesc}
          label="Deskripsi"
          placeholder="Deskripsi"
          multiline
          numberOfLines={4}
        />
        <View style={styles.spacerTop}>
          <CustomButton
            backgroundColor="#102C57"
            color="#fff"
            text="Simpan"
            width="100%"
            onPress={() => {
              addNote(title, desc);
              setCurrentPage('home');
            }}
          />
        </View>
         <View style={styles.spacerTop}>
          <CustomButton
            backgroundColor="#FFB1B1"
            color="#fff"
            text="Kembali"
            width="100%"
            onPress={() => {
              setCurrentPage('home');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFCBCB', 
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    elevation: 5,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default AddNote;
