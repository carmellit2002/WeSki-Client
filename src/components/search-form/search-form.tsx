import React, {useContext, useState} from "react";
import "./search-form.scss";
import { Hotel } from "../../AxiosInstances/types";
import ResortsSelect from "./resorts-select/resorts-select";
import GuestsSelect from "./guests-select/guests-select";
import SearchButton from "./search-button/search-button";
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import { getHotels } from "../../AxiosInstances/serverRequestor";
import { HotelsContext } from "../../context/hotelsContext";
import { MAX_GROUP_SIZE } from "../../AxiosInstances/consts";

const SearchForm: React.FC = () => {
    const [skiSiteId, setSkiSiteId] = useState<number>(1);
    const [groupSize, setGroupSize] = useState<number>(1);
    const [startDate, setStartDate] = useState<Date | null>(dayjs().toDate());
    const [endDate, setEndDate] = useState<Date | null>(dayjs().add(7, 'days').toDate());
    const { setHotels, setIsLoading, addHotels } = useContext(HotelsContext);

    const onSearchClick = async () => {
        if (startDate && endDate) {
            setIsLoading(true);
            const hotels: Hotel[] | undefined = await getHotels(skiSiteId, groupSize, startDate, endDate);
            if (hotels) {
                setHotels(hotels);
                setIsLoading(false);
            }

            for (let i = groupSize + 1; i <= MAX_GROUP_SIZE; i++) {
                const additionalHotels: Hotel[] | undefined = await getHotels(skiSiteId, i, startDate, endDate);
                if (additionalHotels) {
                    addHotels(additionalHotels);
                }
            }
        }

    }
    
    return (
        <div className="search-form">
            <ResortsSelect value={skiSiteId} onChange={skiSiteId => setSkiSiteId(skiSiteId)} />
            <GuestsSelect value={groupSize} onChange={groupSize => setGroupSize(groupSize)} />
            
            <DatePicker className="search-form-date-picker" selected={startDate} onChange={(date) => setStartDate(date)} enableTabLoop={false} />
            <DatePicker className="search-form-date-picker" selected={endDate} onChange={(date) => setEndDate(date)} enableTabLoop={false} />

            <SearchButton onClick={onSearchClick}/>
        </div>
    );
}

export default SearchForm;