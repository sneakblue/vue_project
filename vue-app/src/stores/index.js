import useSessionStore from "./session";

const appStore = {};

// Register app status Library
export const registerStore = () => {
    appStore['sessionStore'] = useSessionStore();
};

export default appStore;
