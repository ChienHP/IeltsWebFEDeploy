import { post } from "../utils/request";

export const register = (data) => {
    return post("/user/register", data);
}

export const login = (data) => {
    return post("/user/login", data);
}