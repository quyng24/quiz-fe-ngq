import { post } from "../utils/reques";

export const createAnswer = async opitons => {
    const result = await post(`answers`, opitons);
    return result;
}