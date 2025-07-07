import React, { useState } from "react";
import { Hotel } from "../AxiosInstances/types";
import { HotelsContext } from "./hotelsContext";

const HotelsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return <HotelsContext.Provider value={{hotels, setHotels, isLoading, setIsLoading}}>
        {children}
    </HotelsContext.Provider>
}

export default HotelsContextProvider;