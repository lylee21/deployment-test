const env = process.env.REACT_APP_ENV;

let config = {
    baseURL: "http://localhost/"
}

switch(env.toUpperCase()){
    case: "STAGE":
        config.baseURL = "https://lylee21.github.io/deployment-test/"
        break;

    case: "PRODUCTION":
        config.baseURL = "https://lylee21.github.io/deployment-test/"
        break;
}

export default config;