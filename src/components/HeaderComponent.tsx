import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

import icon from '../../assets/favicon.png'

export function HeaderComponent() {
    return (
        <View style={styles.container}>
         <Image 
            source={icon}
            width={45}
            height={45}
         ></Image>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width:'100%',
        alignItems:'center'
    }
})