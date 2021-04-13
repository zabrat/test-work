export interface LoginPageState {
    currentUser: UserData | null;
    isAuthorized: boolean;
}

export interface UserData {
    username: string;
    password: string;
}

export interface LoginAction {
    type: string;
    payload: UserData;
}
