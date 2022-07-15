import User from "../models/User";

export const getAll = (): Promise<User[]> => {
    return User.findAll();
}

export const create = (): Promise<User> => {
    return User.create(
        {
            name: 'teste',
            user: 'username',
            password: '123456',
        }
    );
}