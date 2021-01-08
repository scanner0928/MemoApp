import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>令和3年1月8日</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          【ワシントン共同】トランプ米大統領は7日、凍結が解除されたツイッターに動画を投稿し「新政
        </Text>
      </ScrollView>
      <CircleButton
        style={{
          top: 170,
          bottom: 'auto',
        }}
        name="feather-alt"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 100,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 35,
    fontWeight: 'bold',
  },
  memoDate: {
    fontSize: 12,
    color: '#ffffff',
    lineHeight: 15,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 25,
  },
});
