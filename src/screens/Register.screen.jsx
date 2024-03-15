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

const RegisterScreen = () => {
    const navigation = useNavigation();
    const styles = registerScreenStyles();
    const { handleRegister } = useContext(UserContext);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(/\d/, "Password must contain a number")
            .matches(/[A-Z]/, "Password must contain an uppercase letter"),
        confirmPassword: Yup.string()
            .required("Confirm password is required")
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={[colorTheme.secondary.first, colorTheme.secondary.second]} 
                style={styles.topGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.topText}>Welcome!</Text>
            </LinearGradient>
            <Text style={styles.text}>Sign Up</Text>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => handleRegister(values.email, values.password)}
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
                            <CustomTextInput
                                label="Confirm Password"
                                name="confirmPassword"
                                secureTextEntry
                                width={vw(80)}
                                formikProps={formikProps}
                                marginTop={10}
                            />
                            <CustomButton
                                title="Sign Up"
                                onPress={formikProps.handleSubmit}
                                width={vw(80)}
                                height={50}
                                disabled={isFormUnchanged}
                                marginTop={10}
                                marginBottom={0}
                            />
                            <CustomButton
                                title="Sign In"
                                onPress={() => navigation.navigate(AuthRouteNames.LOGIN)}
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

export default RegisterScreen;

const registerScreenStyles = () => StyleSheet.create({
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