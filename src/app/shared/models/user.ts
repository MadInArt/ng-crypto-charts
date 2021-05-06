export interface DataContainer{
    usersData: Users [];
}

export interface Users{
    page: number;
    per_page: number;
    total:number;
    total_pages: number;
    data: User[];
}

export interface User{
    id: number;
    email: string;
    first_name: string;
    last_name: string;
   }

export interface LoginUser{
    email: string;
    password: string;
    token? : string;
}
export interface RegisterUser{
    email: string;
    password: string;
    token? : string;
}