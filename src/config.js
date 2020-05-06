const dev = {
    API_URL: "http://pilot.computicket.com/webapi",
};

const test = {
    API_URL: "http://pilot.computicket.com/webapi",
};

const prod = {
    API_URL: "http://pilot.computicket.com/webapi",
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    :
    process.env.REACT_APP_STAGE === 'test'
        ? test
        : dev

export const isBrowser = typeof window === "object";

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    APP_NAME: "computicket-travel",
    
    FLIGHT_API: "/flight",
    BUSSES_API: "/busses",
    USER_API: "/user",
    PUBLIC_API: "/public",

    ...config
};
