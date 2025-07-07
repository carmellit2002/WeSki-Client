import { createContext } from 'react';
import { Hotel } from '../AxiosInstances/types';

interface HotelsContextProps {
    hotels: Hotel[];
    setHotels: (hotels: Hotel[]) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

const DEFAULT_CONTEXT_VALUE: HotelsContextProps = {
    hotels: [],
    setHotels: () => {},
    isLoading: false,
    setIsLoading: () => {}
}

export const HotelsContext = createContext<HotelsContextProps>(DEFAULT_CONTEXT_VALUE);