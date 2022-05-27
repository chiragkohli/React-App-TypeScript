import React from "react";

export interface IContext {
    color: string,
    login: (e: string) => void,
};
const colorContext = React.createContext({
    color: {
        background: 'linear-gradient(to top right, #33ccff 0%, #ff99cc 100%)'
    },
    changeColor: () => { },
});

export default colorContext;