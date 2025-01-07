import {IUser} from "@/types/user";
/**
 * @description Interface which used as response interface in fetchUsers method.
 * @method  fetchUsers
 * @interface IUser
 */

export interface IUserResponse {
    results: IUser[]
}