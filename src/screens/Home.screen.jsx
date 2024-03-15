import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GameRouteNames } from '../router/route-names';
import UserContext from '../contexts/UserContextProvider';
import { getGames } from '../api';
import GameCard from '../components/GameCard.component';
import { vw, vh } from '../utils/scale';
import FooterMenu from '../components/FooterMenu.component';
import colorTheme from '../utils/colorTheme';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
    const [games, setGames] = useState([]);
    const { user } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchGames = async () => {
            const gamesData = await getGames(user.accessToken);
            const sortedGames = gamesData.games.sort((a, b) => (a.player2 ? 1 : b.player2 ? -1 : 0));
            setGames(sortedGames);
        };

        fetchGames();
    }, []);

    const joinGame = (gameId) => {
        // TODO: Implement the logic to join a game
        console.log(`Joining game ${gameId}`);
    };

    return (
        <View style={styles.background}>
            <ScrollView contentContainerStyle={styles.container}>
                <LinearGradient 
                    colors={[colorTheme.secondary.first, colorTheme.secondary.second]} 
                    style={styles.topGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={styles.topText}>Available games</Text>
                </LinearGradient>
                <View style={styles.cardsContainer}>
                    {games.map(game => (
                        <GameCard
                            key={game.id}
                            game={game}
                            onJoin={joinGame}
                            width={vw(80)}
                            marginTop={15}
                        />
                    ))}
                </View>
            </ScrollView>
            <FooterMenu
                height={vh(7)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colorTheme.primary.dark,
    },
    container: {
        backgroundColor: colorTheme.primary.dark,
    },
    cardsContainer: {
        alignItems: 'center',
    },
    topText: {
        fontSize: 36,
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
    },
});

export default HomeScreen;