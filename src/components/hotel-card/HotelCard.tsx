import { FunctionComponent } from "react";
import { Container } from "./styles";
import { ImagePreview, MainImage, HotelMetadata, Name, Rating, Location, Price } from "./styles";

interface HotelCardProps {
    name: string,
    rating: number,
    location: string,
    price: number,
    mainImage: string
}

const HotelCard: FunctionComponent<HotelCardProps> = ({
    name,
    rating,
    location,
    price,
    mainImage
}) => {
    console.log(mainImage);
    return <Container>
        <ImagePreview> 
            <MainImage src={mainImage} />
        </ImagePreview>
        <HotelMetadata>
            <Name> {name} </Name>
            <Rating> {rating} </Rating>
            <Location> {location} </Location>
            <Price> £{price} </Price>
        </HotelMetadata>
    </Container>
}

export default HotelCard;