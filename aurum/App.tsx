import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Root from './src';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionPage from './src/pages/Question';
import SolutionCategoriesPage from './src/pages/SolutionCategories';
import SolutionPage from './src/pages/Solution';
import ChildRoot from './src/indexChild';
import AnswerPage from './src/pages/Answer';
import MonthlyViewPage from './src/pages/MonthlyView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Root"
            component={Root}
          />
          <Stack.Screen
            name="Question"
            component={QuestionPage}
          />
          <Stack.Screen
            name="SolutionCategories"
            component={SolutionCategoriesPage}
          />
          <Stack.Screen
            name="Solution"
            component={SolutionPage}
          />
          <Stack.Screen
            name="ChildRoot"
            component={ChildRoot}
          />
          <Stack.Screen
            name="Answer"
            component={AnswerPage}
          />
          <Stack.Screen
            name="MonthlyView"
            component={MonthlyViewPage}
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
