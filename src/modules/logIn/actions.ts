import { constants } from '../../constants';
import { UserData } from '../../types';

export const onSignInRequest = (payload: UserData) => ({
    type: constants.SIGN_IN_REQUEST,
    payload
})