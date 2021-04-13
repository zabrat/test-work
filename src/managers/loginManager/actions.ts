import { constants } from '../../constants';
import { UserData } from '../../types';

export const onSignInSuccess = (payload: UserData) => ({
    type: constants.SIGN_IN_SUCCESS,
    payload
});