import { get, post } from "../utils/reques";

export const login = async (email, password) => {
    const result = await get(`users?email=${email}&password=${password}`);
    return result;
}
export const register = async opitons => {
    const result = await post(`users`, opitons);
    return result;
}
export const checkExits = async (key, value) => {
    const result = await get(`users?${key}=${value}`);
    return result;
}