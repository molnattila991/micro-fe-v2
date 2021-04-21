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

const BUSINESS_LOGIC = {
    TODO: {
        CREATE_DIALOG: tokenPrefix + "bl-todo-create-dialog",
        EDIT_DIALOG: tokenPrefix + "bl-todo-edit-dialog",
        ACTION: {
            TOGGLE: tokenPrefix + "bl-todo-action-toggle",
            DELETE: tokenPrefix + "bl-todo-action-delete"
        }
    }
}

export const INJECTION_TOKEN = {
    BUS: {
        CONNECTOR: tokenPrefix + "bus-connector"
    },
    STATE,
    API: {
        TODO: tokenPrefix + "api-todo"
    },
    TOOLS: {
        TOASTER: tokenPrefix + "tools-toaster",
        API: {
            ERRORHANDLER: tokenPrefix+ "api-error-handler"
        }
    },
    BUSINESS_LOGIC
}

