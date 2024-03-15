import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GameRouteNames } from '../router/route-names';
import colorTheme from '../utils/colorTheme';
import { LinearGradient } from 'expo-linear-gradient';

const FooterMenu = ({ height = 50 }) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.footer, { height }]}>
            <LinearGradient
                colors={[colorTheme.secondary.first, colorTheme.secondary.second]}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <TouchableOpacity onPress={() => navigation.navigate(GameRouteNames.HOME)}>
                    <Icon name="gamepad" size={30} color={colorTheme.text.primary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(GameRouteNames.PROFILE)}>
                    <Icon name="user" size={30} color={colorTheme.text.primary} />
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
    },
});

export default FooterMenu;