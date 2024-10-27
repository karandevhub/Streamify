import { View, Text, Image } from 'react-native'
import React from 'react'
import { commonStyles } from '@/styles/commonStyles'
import { splashStyles } from '@/styles/splashStyles'
import { useFonts } from 'expo-font'
import { tokenStorage } from '@/service/storage'

interface DecodedToken {
    exp: number;
}

const Page = () => {
    const [loaded] = useFonts({
        Bold: require("@/assets/fonts/Poppins-Bold.ttf"),
        Regular: require("@/assets/fonts/Poppins-Regular.ttf"),
        Medium: require("@/assets/fonts/Poppins-Medium.ttf"),
        SemiBold: require("@/assets/fonts/Poppins-SemiBold.ttf"),
        Light: require("@/assets/fonts/Poppins-Light.ttf"),
    })

    const tokenCheck = () => {
        const accessToken = tokenStorage.getString("accessToken") as string
    }
    return (
        <View style={commonStyles?.container}>
            <Image style={splashStyles.img} source={require("@/assets/images/splash.png")} />
        </View>
    )
}

export default Page