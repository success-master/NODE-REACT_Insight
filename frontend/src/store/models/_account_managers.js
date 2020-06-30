import AccountService from '../../services/AccountService';



export const accountManagers = {
    state: {
        accountManagers: []
    },
    reducers: {
        updateState(state, payload, name) {
            return { ...state, [name]: payload };
        },
        updateError(state, payload) {
            return { ...state, errors: payload };
        }
    },
    effects: (dispatch) => ({
        async getAccountManagers() {
            let accountManagers = await AccountService.getAccountManagers();
           this.updateState(accountManagers, 'accountManagers');
        }
    })
};
