export const initialState = {
    activeMenu: true,
    navState: {
        chart: false,
        userProfile: false,
        notification: false
    },
    screenSize: 1000,
    currentColor: '#1A97F5',
    currentMode: 'Light',
    themeSettings: false
}

/**
 * It's a reducer function that takes in a state and an action and returns a new state based on the
 * action.type.
 * @param state - the current state of the application
 * @param action - {type: "CHANGE_MENU_STATE", stateMenu: "active"}
 * @returns The state is being returned.
 */
export const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_MENU_STATE":
            return {
                ...state,
                activeMenu: action.stateMenu
            }
        case "CHANGE_THEME_SETTINGS":
            return {
                ...state,
                themeSettings: action.stateSetting
            }
        case "HANDLE_CLICK":
            const { navState } = initialState
            if (action.name) {
                return {
                    ...state,
                    navState:
                    {
                        ...navState, [action.name]: true
                    }
                }
            }
            return {
                ...state,
                navState: initialState.navState
            }
        case "SET_SCREEN_SIZE":
            return {
                ...state,
                screenSize: action.size
            }
        case "SET_CURRENT_COLOR":
            localStorage.setItem('colorMode', action.color)
            return {
                ...state,
                currentColor: action.color
            }
        case "SET_CURRENT_MODE":
            localStorage.setItem('themeMode', action.theme)
            return {
                ...state,
                currentMode: action.theme
            }
        default:
            return { ...state }
    }
}
