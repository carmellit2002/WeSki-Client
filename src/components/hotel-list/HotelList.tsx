import { FunctionComponent } from "react";
import { Hotel } from "../../AxiosInstances/types";
import { Container, ResultMetadata } from "./styles";
import HotelCard from "../hotel-card";

interface HotelListProps {
    hotels: Hotel[]
}

const HotelList: FunctionComponent<HotelListProps> = ({ hotels }) => {
    return <Container>
        <ResultMetadata>

        </ResultMetadata>
        {
            hotels.map((hotel) => <HotelCard 
                name={hotel.name}
                rating={hotel.rating}
                location={hotel.location}
                price={hotel.price}
                mainImage={hotel.mainImage}
            />)
        }
    </Container>
}

export default HotelList;