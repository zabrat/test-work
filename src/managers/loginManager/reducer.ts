import { constants } from '../../constants';
import { LoginPageState } from '../../types/loginPageTypes';

const initialState: LoginPageState = {
    currentUser: null,
    isAuthorized: false,
};

export default (state = initialState, action: any): LoginPageState => {
    switch (action.type) {
        case constants.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isAuthorized: true,
            }
        default:
            return state;
    }
}