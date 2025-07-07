import { createContext } from 'react';
import { Hotel } from '../AxiosInstances/types';

interface HotelsContextProps {
    hotels: Hotel[]
    setHotels: (hotels: Hotel[]) => void;
}

const DEFAULT_CONTEXT_VALUE: HotelsContextProps = {
    hotels: [],
    setHotels: () => []
}

export const HotelsContext = createContext<HotelsContextProps>(DEFAULT_CONTEXT_VALUE);