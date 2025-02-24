import {httpGetRequest} from "@/assignment-2/helpers/caller.ts";
import {Resp} from "@/assignment-2/types/types.ts";

const API_ENDPOINT = "https://reqres.in/api/users?per_page=12";

export const fetchUsers: () => Promise<Resp> = async (): Promise<Resp> => {
    const response = await httpGetRequest(API_ENDPOINT);
    return response.data as Resp;
};
