import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TextDetailProps {
  label: string;
  text: string;
}

function TextDetail({ label, text }: TextDetailProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{label}</Text>
      <Text style={styles.text}>: </Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  text: {
    color: 'black',
    fontSize: 15,
    paddingBottom: 10,
  },
});

export default TextDetail;
