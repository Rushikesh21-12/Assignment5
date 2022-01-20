import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import AddCommentScreen from './src/screens/AddCommentScreen'
import PostDetailsScreen from './src/screens/PostDetailsScreen'
import UsersListScreen from './src/screens/UsersListScreen'
import UserPostScreen from './src/screens/UsersPostScreen'

export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <Provider store = {store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName = 'UserListScreen'>
            <Stack.Screen
              name = 'UserListScreen'
              component = {UsersListScreen}
            />

            <Stack.Screen
              name = 'UserPostScreen'
              component = {UserPostScreen}
            />

            <Stack.Screen
              name = 'PostDetailsScreen'
              component = {PostDetailsScreen}
            />

            <Stack.Screen
              name = 'AddCommentScreen'
              component = {AddCommentScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}
