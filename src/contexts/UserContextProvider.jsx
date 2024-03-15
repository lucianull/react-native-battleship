import React, { createContext, useState } from 'react';
import { login, register } from '../api';
import { Alert } from 'react-native';

const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState({
    email: null,
    accessToken: null,
    refreshToken: null,
  });

  const handleLogin = async (email, password) => {
    try {
      const result = await login(email, password);
      setUser({
        email: email,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      });
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 403) {
          Alert.alert('Sign In Error', 'The credentials are not correct.');
        } else {
          Alert.alert('Sign In Error', 'An error occurred while signing in.');
        }
      }
    }
  }

  const handleRegister = async (email, password) => {
    try {
      const result = await register(email, password);
      setUser({
        email: email,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      });
    }
    catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 409) {
          Alert.alert('Registration Error', 'A user with this email already exists.');
        } else {
          Alert.alert('Registration Error', 'An error occurred while registering.');
        }
      }
    }
  }
  const handleLogout = () => {
    setUser({
      email: null,
      accessToken: null,
      refreshToken: null,
    });
  }

  return (
    <UserContext.Provider value={{
      user,
      handleLogin,
      handleRegister,
      handleLogout,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;