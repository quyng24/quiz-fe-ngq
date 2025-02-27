import { getCookie } from "../helper/cookie";
import { get } from "../utils/reques";

export const getAnswerByUserId = async () => {
    const userId = getCookie('id');
    const result = await get(`answers?userId=${userId}`);
    return result;
};
export const getAnswer = async (id) => {
    const result = await get(`answers?id=${id}`);
    return result;
};