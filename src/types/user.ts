/**
 * @description  object of each user obtained from the api
 */
export interface IUser {
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}
