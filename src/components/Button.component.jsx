import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import colorTheme from '../utils/colorTheme';
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = ({
  title,
  onPress,
  width = '100%',
  height = 40,
  disabled = false,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0
}) => {
  const styles = buttonStyles(width, height, marginTop, marginRight, marginBottom, marginLeft);

  return (
    <LinearGradient 
      colors={[colorTheme.secondary.first, colorTheme.secondary.second]} 
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CustomButton;

const buttonStyles = (
  width,
  height,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft
) => StyleSheet.create({
  gradient: {
    width: width,
    height: height,
    borderRadius: 5,
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: colorTheme.text.primary,
    fontSize: 16,
  },
});