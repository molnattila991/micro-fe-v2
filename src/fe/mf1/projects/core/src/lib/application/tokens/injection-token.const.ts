const tokenPrefix = "injection-token-";

export const STATE = {
    QUERY: {
        TODO: tokenPrefix + "state-query-todo",
        ROOT: tokenPrefix + "state-query-root"
    },
    COMMAND: {
        TODO: tokenPrefix + "state-command-todo",
        ROOT: tokenPrefix + "state-command-root"
    }
}

export const INJECTION_TOKEN = {
    BUS: {
        CONNECTOR: tokenPrefix + "bus-connector"
    },
    STATE: STATE,
    API: {
        TODO: tokenPrefix + "api-todo"
    },
    TOOLS: {
        TOASTER: tokenPrefix + "tools-toaster"
    }
}

