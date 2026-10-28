export interface Login {
    email: string;
    password: string;
}

export const EMPTY_LOGIN: Login = {
    email: '',
    password: ''
}