export const initialState = {
    activeMenu: true,
    navState: {
        chart: false,
        cart: false,
        userProfile: false,
        notification: false
    },
    screenSize: 1000
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_MENU_STATE":
            return {
                ...state,
                activeMenu: action.stateMenu
            }
        case "HANDLE_CLICK":
            const { navState } = initialState
            return {
                ...state,
                navState:
                {
                    ...navState, [action.name]: true
                }
            }
        case "SET_SCREEN_SIZE":
            return {
                ...state,
                screenSize: action.size
            }
        default:
            return { ...state }
    }
}
