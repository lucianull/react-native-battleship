import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import colorTheme from '../utils/colorTheme';
import { LinearGradient } from 'expo-linear-gradient';

const CustomTextInput = ({ label, name, formikProps, height, width, textColor, placeholderColor, backgroundColor, marginTop, marginBottom, marginLeft, marginRight, ...props }) => {
  const styles = textInputStyles(height, width, textColor, placeholderColor, backgroundColor, marginTop, marginBottom, marginLeft, marginRight);
  
  const validationError = formikProps.touched[name] && formikProps.errors[name];

  return (
    <>
      {validationError && <Text style={styles.error}>{validationError}</Text>}
      <View style={styles.gradientBorder}>
        <LinearGradient 
          colors={[colorTheme.secondary.first, colorTheme.secondary.second]} 
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <TextInput
            style={styles.input}
            value={formikProps.values[name]}
            onChangeText={formikProps.handleChange(name)}
            onBlur={formikProps.handleBlur(name)}
            placeholder={label}
            placeholderTextColor={styles.placeholder.color}
            {...props}
          />
        </LinearGradient>
      </View>
    </>
  );
};

export default CustomTextInput;

const textInputStyles = (
    height = 50,
    width = '100%',
    textColor = colorTheme.text.primary,
    placeholderColor = colorTheme.text.placeholder,
    backgroundColor = colorTheme.primary.light,
    marginTop = 0, 
    marginBottom = 0, 
    marginLeft = 0, 
    marginRight = 0,
  ) => StyleSheet.create({
    gradientBorder: {
      height: height,
      width: width,
      borderRadius: 5,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight,
    },
    gradient: {
      flex: 1,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      height: height-2,
      width: width-2,
      color: textColor,
      borderWidth: 0,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor, // added this line
    },
    placeholder: {
      color: placeholderColor,
    },
    error: {
      color: colorTheme.error,
      marginTop: 15,
      marginBottom: 5,
    },
  });