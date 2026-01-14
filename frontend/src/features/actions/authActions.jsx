import { axiosintance } from "../../config/axiosintance"
import { addUser } from "../reducers/authSlice";

// =======================
// Register Api
// =======================

export const registerApi = (data) => async (dispatch) => {
    try {
        const response = await axiosintance.post("/api/auth/register", data);
        if (response) {
            return response.data;
        }
    } catch (error) {
        throw error.response?.data || error;
    }
};

// =========================
// Login Api
//==========================

export const loginApi = (data) => async (dispatch) => {
    try {
        const response = await axiosintance.post("/api/auth/login", data);
        if (response) {
            return dispatch(addUser(response.data));
        }
    } catch (error) {
        throw error.response?.data || error;
    }
};