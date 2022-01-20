import React, { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, setId } from '../redux/actions'

const OneItem = ({item, navigation}) => {
    const dispatch = useDispatch()
    return(
        <TouchableOpacity onPress = {() => {
            dispatch(setId(item[0]))
            navigation.navigate('UserPostScreen')
            
        }}>
            <View style = {styles.list}>
                <Text style = {styles.text}>{item[1]}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function UsersListScreen({navigation}) {

    const users = useSelector(state => state.userReducer)
    const isLoading = useSelector(state => state.loadingReducer)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    
    return (
        <View style = {styles.container}>
            {isLoading && <ActivityIndicator size = "large" color = "#00ff00"/>}
            
            {!isLoading && <FlatList
                data = {users}
                renderItem = {({item}) => {return <OneItem item = {item} navigation = {navigation}/>}}
            />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1f1e1e',
        justifyContent: 'center',
        flex: 1
    },

    list: {
        borderTopWidth: 2,
        borderColor: 'yellow',
        padding: 15,
    },

    text: {
        color: 'yellow',
        fontSize: 20,
    },

})