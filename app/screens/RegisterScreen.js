import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppFormField, AppForm, SubmitButton } from '../components/forms'
import colors from '../config/colors'

const validationSchema = Yup.object().shape({
    userName: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(16).label("Password")
})

const RegisterScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/icon_trans.png")} />

            <AppForm
                initialValues={{ userName: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="user"
                    name="userName"
                    placeholder="User"
                    textContentType="name"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="envelope"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />

                <SubmitButton title='Register' />

            </AppForm>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.white
    },
    logo: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 70,
        marginBottom: 20
    }
})

export default RegisterScreen
