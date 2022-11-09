import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Root from './src';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionPage from './src/pages/Question';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer
        documentTitle={{
          enabled: false,
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
          />
          <Stack.Screen
            name="Question"
            component={QuestionPage}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
