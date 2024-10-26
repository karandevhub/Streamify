import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Colors } from '@/utils/Constants'
import { Stack } from 'expo-router'

const Root = () => {
    return (
        <>
            <StatusBar barStyle={"light-content"} backgroundColor={Colors.tertiary} />
            <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='index' />
            </Stack>
        </>
    )
}

export default Root