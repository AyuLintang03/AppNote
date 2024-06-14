import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const EditNote = ({ editNote, selectedNote, setCurrentPage }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setDesc(selectedNote.desc);
    }
  }, [selectedNote]);

  const handleEditNote = () => {
    if (selectedNote) {
      editNote(selectedNote.id, title, desc);
      setCurrentPage('home');
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.pageTitle}>Edit Note</Text>
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
            text="Simpan Perubahan"
            width="100%"
            onPress={handleEditNote}
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

export default EditNote;
