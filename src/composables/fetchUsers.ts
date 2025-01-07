import {ref, shallowRef} from "vue";
import {IUser} from "@/types/user";
import {Getter} from "@/api/Getter";
import {IUserResponse} from "@/types/api/userResponse";

export const useFetchUsers = () => {
    /**
     * @description loading status of fetch users
     * @type boolean
     */
    const loading = shallowRef<boolean>(false);

    /**
     * @description error status of fetch users
     * @type boolean
     */
    const error = shallowRef<boolean>(false);

    /**
     * @description current page count of fetch users
     * @type number
     */
    const page = shallowRef<number>(1);

    /**
     * @description list of users
     * @type IUser
     */
    const users = ref<IUser[]>([]);


    /**
     * @description Fetches a list of users from the API.
     * @param {number} [pageNumber=1] The page number to fetch.
     * @returns {Promise<void>}
     */
    const fetchUsers = async (pageNumber: number = 1): Promise<void> => {
        if (loading.value || error.value) return;
        loading.value = true;

        const query = `page=${pageNumber}&results=10`

        try {
            const response = await Getter.get<IUserResponse>(query);
             users.value.push(...response.results);
        } catch (err) {
            console.error('Error fetching users:', err);
            error.value = true
        } finally {
            loading.value = false;
        }
    }

    /**
     * @description refetch a list of users from the API if error is true.
     * @returns {Promise<void>}
     */
    const refetch = async (): Promise<void> => {
        error.value = false;
        await fetchUsers(page.value)
    }

    return {
        fetchUsers,
        refetch,
        loading,
        error,
        page,
        users
    }
}