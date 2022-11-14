import React, {useState, useEffect, createContext} from "react;"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

const AuthProvider = ({children}) => {
    const [state, useState] = useState({
        user: null,
        token: "",
    });
}

useEffect(() => {
    const loadFromAsyncStorage = async () => {
        let data = await AsyncStorage.getItem("auth-rn");
        const parsed = JSON.parse(data);
        setState({...state, user: parsed.user, token: parsed.token});
    };
    loadFromAsyncStorage();
});

return (
    <AuthContext.Provider value={[state, setState]}>
        {children}
    </AuthContext.Provider>
);

export {AuthContext, AuthProvider};