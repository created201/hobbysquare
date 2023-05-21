function isEnvDevelopment() {
    return process.env.NODE_ENV === "development"
}

function isDbClientAvailable() {
    return global._mongoClinetPromise ? true : false
}

export { isEnvDevelopment, isDbClientAvailable }
