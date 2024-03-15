import React, { useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { vw } from "../utils/scale";
import CustomButton from "../components/Button.component";
import CustomTextInput from "../components/TextInput.component";
import colorTheme from '../utils/colorTheme';
import UserContext from "../contexts/UserContextProvider";
import { AuthRouteNames } from "../router/route-names";
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
    const styles = loginScreenStyles();
    const { handleLogin } = useContext(UserContext);
    const navigation = useNavigation();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={[colorTheme.secondary.first, colorTheme.secondary.second]} 
                style={styles.topGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.topText}>Welcome back!</Text>
            </LinearGradient>
            <Text style={styles.text}>Sign In</Text>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => handleLogin(values.email, values.password)}
            >
                {(formikProps) => {
                    const { values, initialValues } = formikProps;
                    const isFormUnchanged =
                        JSON.stringify(values) === JSON.stringify(initialValues);

                    return (
                        <>
                            <CustomTextInput
                                label="Email"
                                name="email"
                                keyboardType="email-address"
                                width={vw(80)}
                                formikProps={formikProps}
                                marginTop={10}
                            />
                            <CustomTextInput
                                label="Password"
                                name="password"
                                secureTextEntry
                                width={vw(80)}
                                formikProps={formikProps}
                                marginTop={10}
                            />
                            <CustomButton
                                title="Login"
                                onPress={formikProps.handleSubmit}
                                width={vw(80)}
                                height={50}
                                marginTop={10}
                                marginBottom={0}
                            />
                            <CustomButton
                                title="Sign Up"
                                onPress={() => navigation.navigate(AuthRouteNames.REGISTER)}
                                width={vw(80)}
                                height={50}
                                marginTop={10}
                                marginBottom={0}
                            />
                        </>
                    );
                }}
            </Formik>
        </View>
    )
};

export default LoginScreen;

const loginScreenStyles = () => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 120,
        backgroundColor: colorTheme.primary.dark,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 120,
        marginBottom: 20,
        color: colorTheme.text.primary,
    },
    topText: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 120,
        marginBottom: 20,
        color: colorTheme.text.primary,
    },
    topGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'absolute',
        top: 0,
    },
});