import React from "react";

export interface IAuthContext {
    authenticated: boolean,
    login: (e: string) => void,
};
const authContext = React.createContext({
    authenticated: false,
    login: () => { },
});

export default authContext;