import { View, Text, FlatList, StyleSheet, Button, ActivityIndicator } from 'react-native';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../redux/actions';
import { useIsFocused } from '@react-navigation/native';

export default function PostDetailsScreen({navigation}) {

    const OneItem = ({item}) => {
        return(
            <View style = {styles.list}>
              <Text style = {styles.text}>{item.body}</Text>
          </View>
        )
    }

    const postId = useSelector(state => state.postIdReducer)
    const comments = useSelector(state => state.commentsReducer)
    const isLoading = useSelector(state => state.loadingReducer)
    const dispatch = useDispatch()

    const isFocused = useIsFocused()

    useEffect(() => {
        if(isFocused)
            dispatch(getComments(postId))
      }, [isFocused])
    return (
        <View style = {styles.container}>

            {isLoading && <ActivityIndicator size = "large" color = "#00ff00"/>}        

            {!isLoading && comments.length !== 0 
                ? <FlatList
                    data = {comments}
                    renderItem = {({item}) => {return <OneItem item = {item}/>}}
                />

                :<Text style = {styles.empty}>No Comments </Text>
            }

            <Button
                title = 'add comment'
                onPress = {() => navigation.navigate('AddCommentScreen')}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1f1e1e',
    },
    
    list: {
        borderTopWidth: 2,
        borderColor: 'red',
        padding: 15,
    },
    
    text: {
        color: 'yellow',
        textAlign: 'justify',
        fontSize: 16,
        marginBottom: 10
    },

    empty: {
        textAlign: 'center',
        marginBottom: 20,
        color: 'white'
    }
})