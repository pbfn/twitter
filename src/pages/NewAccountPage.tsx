import React, { useState, useEffect } from 'react'

import {
    SafeAreaView,
    Platform,
    View,
    StyleSheet,
    Text,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native'
import { HeaderComponent } from '../components/HeaderComponent'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { format, isBefore } from 'date-fns'

import colors from '../styles/colors'
import fonts from '../styles/fonts'


export default function NewAccountPage() {


    const [name, setName] = useState<string>('')
    const [initialName, setInitialName] = useState(true)
    const [validName, setValidName] = useState(true)

    const [email, setEmail] = useState<string>()
    const [initialEmail, setInitialEmail] = useState(true)
    const [valdidEmail, setValidEmail] = useState(true)

    const [birthDate, setBirthDate] = useState(new Date())
    const [initialBirthDate, setInitialBirthDate] = useState(true)

    const [isValid, setIsValid] = useState(true)//alterar para false

    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')
    const [selectedDateTime, setSelectDateTime] = useState(new Date())


    function handleInputNameChange(value: string) {
        setInitialName(false)
        if (!value) {
            setValidName(false)
        } else {
            if (value.length > 50 || value.length == 0) {
                setValidName(false)
            } else {
                setName(value)
                setValidName(true)
            }
        }
    }

    function handleInputEmailChange(value: string) {
        setInitialEmail(false)
        if (!value) {
            setValidEmail(false)
        } else {
            setEmail(email)
            setValidEmail(true)
        }
    }

    function handleChangeTime(event: Event, dateTime: Date | undefined) {

        if (Platform.OS === 'android') {
            setShowDatePicker(oldState => !oldState)
        }

        // if (dateTime && isBefore(dateTime, new Date())) {
        //     setBirthDate(new Date())
        //     return Alert.alert('Escolha uma hora no futuro!')
        // }


        if (dateTime){
            setInitialBirthDate(false)
            setBirthDate(dateTime)
        }
      
    }

    function handleOpenDateTimePickerForAndroid() {
        setShowDatePicker(oldState => !oldState)
    }


    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent />


            <View style={styles.containerTitle}>
                <Text style={styles.title}>
                    Criar conta
                </Text>
            </View>

            <View style={styles.containerData}>
                <TextInput
                    placeholder="Nome"
                    style={[
                        (initialName === true) ? styles.inputName :
                            [styles.inputName, (validName === true) ? { borderColor: colors.blueDark } : { borderColor: 'red' }]
                    ]}
                    onChangeText={handleInputNameChange}
                />
                <View style={{ alignItems: 'flex-end' }}>
                    <Text >
                        {50}
                    </Text>
                </View>



                <TextInput
                    placeholder="Email"
                    style={[
                        (initialEmail === true) ? styles.inputEmail :
                            [styles.inputEmail, (valdidEmail === true) ? { borderColor: colors.blueDark } : { borderColor: 'red' }]
                    ]}
                    onChangeText={handleInputEmailChange}
                />

                {
                    showDatePicker && (
                        <DateTimePicker
                            value={selectedDateTime}
                            mode="date"
                            display="default"
                            onChange={handleChangeTime}
                        />)

                }

                {
                    Platform.OS === 'android' && (
                        <TouchableOpacity
                            onPress={handleOpenDateTimePickerForAndroid}
                            style={styles.inputData}
                        >
                            <Text style={[styles.data, !initialBirthDate? {color: colors.black}: {color: colors.gray_light}]}>
                                {
                                    initialBirthDate == true
                                        ?
                                        "Data de Nascimento: "
                                        :
                                        `${format(birthDate, 'dd/MM/yyyy')}`
                                }

                            </Text>

                        </TouchableOpacity>

                    )
                }
            </View>

            <View style={styles.separator}></View>

            <View style={styles.containerButton}>
                <TouchableOpacity
                    disabled={!isValid}
                    style={[
                        styles.buttonNext,
                        !isValid ? { backgroundColor: colors.white } : {}
                    ]}
                >
                    <Text style={styles.buttonText}>
                        Avançar
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 30 : 0,
        paddingHorizontal: 25
    },
    containerTitle: {
        marginTop: 15
    },
    title: {
        fontSize: 30,
        fontFamily: fonts.heading,
        color: colors.black
    },
    containerData: {
        marginTop: 100
    },
    inputName: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.black,
        width: '100%',
        fontSize: 18,
        paddingTop: 10
    },
    inputEmail: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.black,
        width: '100%',
        fontSize: 18,
        paddingTop: 10
    },
    inputData: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.black,
        width: '100%',
        fontSize: 18,
        paddingTop: 30
    },
    data:{
        fontSize: 18,
        
    },
    separator: {
        width: '100%',
        borderColor: colors.gray,
    },
    containerButton: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonNext: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blueDark,
        width: 100,
        height: 35,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.white
    }

})