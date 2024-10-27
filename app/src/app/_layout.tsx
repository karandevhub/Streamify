
import React from 'react';
import { Colors } from '@/utils/Constants'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Root = () => {
    return (
        <>
            <StatusBar style='light' backgroundColor={Colors.tertiary} translucent={false} />
            <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='index' />
            </Stack>
        </>
    )
}

export default Root 