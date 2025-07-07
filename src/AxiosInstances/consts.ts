import { AxiosRequestConfig } from "axios";
import { Routes, ServerErrors } from "./types";

const BASE_SERVER_URL = 'http://localhost:8081';

export const SERVER_REQUESTOR_CONFIG: AxiosRequestConfig = {
    baseURL: BASE_SERVER_URL,
    headers: { 'Access-Control-Allow-Origin': true }
};

export const SERVER_ROUTES: Routes = {
    API: {
        GET_HOTELS: "/hotels",
    }
};

export const ERRORS: ServerErrors = {
    GET_HOTELS: "Could not retrieve hotels."
};
