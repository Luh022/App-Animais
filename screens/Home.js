import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';

const Home = () => {
    return (
        <SafeAreaView style={StyleSheet.container}>
            <Text style={StyleSheet.mainText}>Home Component</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: "space-between"},
    mainText:{fontSize: 30, textAlign: 'center'}
})

export default Home;