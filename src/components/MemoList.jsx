import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>
              買い物リスト
            </Text>
            <Text style={styles.memoListItemDate}>
              2020年12月24日 10：00
            </Text>
          </View>
          <TouchableOpacity>
            <Feather name="x" size={16} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>
              買い物リスト
            </Text>
            <Text style={styles.memoListItemDate}>
              2020年12月24日 10：00
            </Text>
          </View>
          <TouchableOpacity>
            <Feather name="x" size={16} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>
              買い物リスト
            </Text>
            <Text style={styles.memoListItemDate}>
              2020年12月24日 10：00
            </Text>
          </View>
          <TouchableOpacity>
            <Feather name="x" size={16} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>
              買い物リスト
            </Text>
            <Text style={styles.memoListItemDate}>
              2020年12月24日 10：00
            </Text>
          </View>
          <TouchableOpacity>
            <Feather name="x" size={16} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.25)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
