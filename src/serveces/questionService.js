import { get } from "../utils/reques";

export const getListQuestion = async (id) => {
    const result = await get(`questions?topicId=${id}`);
    return result;
};