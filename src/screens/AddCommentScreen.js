import { View, TextInput, StyleSheet, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, setBody, setEmail, setName } from '../redux/actions';
import { useIsFocused } from '@react-navigation/native';

export default function AddCommentScreen({navigation}) {

    const isFocused = useIsFocused()
    useEffect(() => {
        if(isFocused){
            dispatch(setName(''))
            dispatch(setEmail(''))
            dispatch(setBody(''))
        }
    }, [isFocused])

    const name = useSelector(state => state.nameReducer)
    const email = useSelector(state => state.emailReducer)
    const body = useSelector(state => state.bodyReducer)
    const dispatch = useDispatch()

    const onAddComment = () => {
        if(name == ''){
            alert('Plaease enter name')
        }else if(email == ''){
            alert('Please enter email')
        }else if(body == ''){
            alert('Please enter comment')
        }else{
            dispatch(addComment())
            navigation.goBack()
        }  
    }

    return (
        <View style = {styles.container}>
            <TextInput
                style = {styles.input}
                placeholder = 'Enter your name'
                onChangeText = {value => dispatch(setName(value))}
            />

            <TextInput
                style = {styles.input}
                placeholder = 'Enter your email'
                onChangeText = {value => dispatch(setEmail(value))}
            />

            <TextInput
                style = {styles.input}
                placeholder = 'Enter your comment'
                onChangeText = {value => dispatch(setBody(value))}
            />

            <Button
                title = 'add'
                onPress = {() => onAddComment()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },

    input: {
        borderBottomWidth: 1
    }
})