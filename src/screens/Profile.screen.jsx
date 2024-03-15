import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getProfileDetails } from "../api";
import UserContext from "../contexts/UserContextProvider";
import CountCard from "../components/CountCard.component";
import CustomButton from "../components/Button.component";
import { vw, vh } from "../utils/scale";
import colorTheme from "../utils/colorTheme";
import FooterMenu from '../components/FooterMenu.component';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
    const [profileData, setProfileData] = useState({
        user: {
            email: '',
        },
        gamesPlayed: '',
        gamesWon: '',
        gamesLost: '',
        currentlyGamesPlaying: '',
    });
    const { user, handleLogout } = useContext(UserContext);

    useEffect(() => {
        const fetchProfileData = async () => {
            const data = await getProfileDetails(user.accessToken);
            setProfileData(data);
        };

        fetchProfileData();
    }, []);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[colorTheme.secondary.first, colorTheme.secondary.second]}
                style={styles.topGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.topText}>{profileData.user.email}</Text>
            </LinearGradient>
            <View style={styles.row}>
                <CountCard
                    count={profileData.gamesPlayed}
                    label="Games played"
                    width='45%'
                />
                <CountCard
                    count={profileData.gamesLost}
                    label="Games lost"
                    width='45%'
                />
            </View>
            <View style={styles.row}>
                <CountCard
                    count={profileData.gamesWon}
                    label="Games won"
                    width='45%'
                />
                <CountCard
                    count={profileData.currentlyGamesPlaying}
                    label="Currently playing"
                    width='45%'
                />
            </View>
            <CustomButton
                title="Logout"
                onPress={() => handleLogout()}
                width={vw(80)}
                height={50}
                marginTop={10}
                marginBottom={0}
            />
            <FooterMenu
                height={vh(7)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colorTheme.primary.dark,
    },
    emailText: {
        fontSize: 20,
        marginBottom: 20,
        color: colorTheme.text.primary,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    topText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 120,
        marginBottom: 20,
        color: colorTheme.text.primary,
    },
    topGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
    },
});

export default ProfileScreen;