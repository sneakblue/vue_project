import useSessionStore from "./session";

const appStore = {};

// Register app status Library
export const registerStore = () => {
    appStore['useSessionStore'] = useSessionStore();
};

export default appStore;
