import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colorTheme from '../utils/colorTheme';
import { color } from 'react-native-elements/dist/helpers';

const CountCard = ({ 
    count, 
    label, 
    width = 'auto', 
    height = 'auto', 
    marginTop = 10, 
    marginRight = 10, 
    marginBottom = 10, 
    marginLeft = 10 
}) => {
    return (
        <View style={[styles.container, { width, height, marginTop, marginRight, marginBottom, marginLeft }]}>
            <Text style={styles.countText}>{count}</Text>
            <Text style={styles.labelText}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: colorTheme.primary.light,
    },
    countText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colorTheme.text.primary,
    },
    labelText: {
        fontSize: 16,
        color: colorTheme.text.placeholder,
        textAlign: 'center',
    },
});

export default CountCard;