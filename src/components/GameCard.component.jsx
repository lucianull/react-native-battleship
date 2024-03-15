import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colorTheme from '../utils/colorTheme';

const GameCard = ({
    game,
    onJoin,
    width,
    backgroundColor = colorTheme.primary.light,
    textColor = colorTheme.text.primary,
    marginTop = 0,
    marginBottom = 0,
    marginLeft = 0,
    marginRight = 0,
}) => {
    const isAvailable = !game.player2;

    return (
        <TouchableOpacity 
            style={[styles.card, { width, backgroundColor, marginTop, marginBottom, marginLeft, marginRight}]} 
            onPress={() => isAvailable && onJoin(game.id)}
            activeOpacity={0.7}
            disabled={!isAvailable} // Disable the TouchableOpacity if the game is not available
        >
            <Text style={[styles.gameId, { color: textColor }]}>Game ID: {game.id}</Text>
            <Text style={{ color: textColor, marginTop:10, }}>Player 1: {game.player1.email}</Text>
            {game.player2 ? (
                <Text style={{ color: textColor, marginTop: 5}}>Player 2: {game.player2.email}</Text>
            ) : (
                <Text style={[styles.available, { color: textColor, marginTop: 5}]}>No Player 2 - Game Available</Text>
            )}
            <Text style={{ color: textColor, marginTop: 5 }}>Status: {game.status}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
    gameId: {
        fontWeight: 'bold',
    },
    available: {},
});

export default GameCard;