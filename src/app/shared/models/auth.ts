export interface Auth{
    email: string;
    password: string;
    token: Token;
    id?: number;
}
export interface Token{
    token: string;
}