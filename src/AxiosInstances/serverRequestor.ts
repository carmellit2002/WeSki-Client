import axios, { AxiosInstance } from "axios";
import { SERVER_REQUESTOR_CONFIG, SERVER_ROUTES, ERRORS } from "./consts"
import { Hotel } from "./types";

export const serverRequestor: AxiosInstance = axios.create(SERVER_REQUESTOR_CONFIG);

export const getHotels = async (destinationId: number, bedCount: number, startDate?: Date, endDate?: Date): Promise<Hotel[] | undefined> => {
    try {
        console.log("startDate:", startDate);
        console.log("endDate:", endDate);
        const url_path = `${SERVER_ROUTES.API.GET_HOTELS}?destination=${destinationId}&bedCount=${bedCount}&startDate=${startDate}&endDate=${endDate}`;
        const response = await serverRequestor.get<Hotel[]>(url_path);
        console.log("Data received in getHotels:", response.data);
        return response.data;
    } catch (e) {
        console.log(ERRORS.GET_HOTELS, e);
        return undefined;
    }
};
