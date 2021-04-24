import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    TouchableOpacity
} from 'react-native'
import { HeaderComponent } from '../components/HeaderComponent'
import colors from '../styles/colors'
import fonts from '../styles/fonts'


export default function HomePage() {
    return (
        <>
        <SafeAreaView style={styles.container}>
            <HeaderComponent />

            <View style={styles.containerText}>
                <Text style={styles.title}>
                    Veja o que está{'\n'}
                    acontecendo no {'\n'}
                    mundo neste{'\n'}
                    momento.
                </Text>
                
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.buttonNewAccount}>
                        <Text style={styles.textNewAccount}>
                            Criar Conta
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
        <SafeAreaView style={styles.containerTextLogin}>
                    <View style={styles.containerLogin}>
                        <Text style={styles.textAccout}>
                            Já tem uma conta?
                        </Text>
                        <TouchableOpacity >
                            <Text style={styles.textLogin}>
                                 Entrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 30 : 0,
        paddingHorizontal: 25
    },
    containerText: {
        marginTop: 200,
        justifyContent: 'center'
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 40
    },
    containerButton: {
        alignItems: 'center',
        marginTop: 30
    },
    buttonNewAccount: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blueDark,
        width: 350,
        height: 35,
        borderRadius: 20,
    },
    textNewAccount:{
        fontSize:16,
        fontFamily:fonts.heading,
        color:colors.white
    },
    containerLogin: {
        flexDirection: 'row',
    },
    textAccout:{
        fontFamily:fonts.text,
        color:colors.black
    },
    textLogin:{
        fontFamily:fonts.text,
        color:colors.blueDark
    },
    containerTextLogin:{
        padding: 25,
        alignItems:'flex-end',
        flexDirection:'row'
    }
})