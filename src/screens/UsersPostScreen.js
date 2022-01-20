import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPost, setPostId } from '../redux/actions';

export default function UsersPostScreen({navigation}) {

  const OneItem = ({item, navigation}) => {
    return(
        <TouchableOpacity onPress = {() => {
            dispatch(setPostId(item.id))
            navigation.navigate('PostDetailsScreen')
        }}>
          <View style = {styles.list}>
            <Text style = {styles.title}>Title : {item.title}</Text>
              <Text style = {styles.text}>{item.body}</Text>
          </View>
               
        </TouchableOpacity>
    )
  }

  const posts = useSelector(state => state.userPostReducer)
  const isLoading = useSelector(state => state.loadingReducer)
  const id = useSelector(state => state.idReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserPost(id))
  }, [dispatch])

  return (
    <View style = {styles.container}>

      {isLoading && <ActivityIndicator size = "large" color = "#00ff00"/>}

      {!isLoading && posts.length !== 0 
        ?<FlatList
          data = {posts}
          renderItem = {({item}) => {return <OneItem item = {item} navigation = {navigation}/>}}
        />
        :<Text style = {styles.empty}>Empty</Text>
  }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  list: {
    borderTopWidth: 2,
    borderColor: 'red',
    padding: 15,
    marginBottom: 10
  },

  title: {
    color: 'yellow',
    textAlign: 'justify',
    fontSize: 18,
    marginBottom: 10
  },

  text: {
    textAlign: 'justify'
  },

  empty: {
    textAlign: 'center',

  }
})