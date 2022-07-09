import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Cart from './Cart';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Cart/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
