import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467fD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    // backgroundColor: 'gray',
    alignItems: 'center',
  },
  appbarTitle: {
    paddingBottom: 8,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 32,
  },
  appbarRight: {
    position: 'absolute',
    right: 20,
    bottom: 16,
    color: 'rgba(255,255,255,0.8)',
  },
});
