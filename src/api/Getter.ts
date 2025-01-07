export class Getter {
    /**
     * Executes a GET request with the given `query` parameter.
     * @template T The expected response type.
     * @param {string} query The query parameters as a string.
     * @returns {Promise<T>} The result of the request, typed as T.
     */

    static async get<T>(query: string): Promise<T> {
        const response =  await fetch(`${import.meta.env.VITE_USER_API_URL}/?${query}`)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json()
    }
}