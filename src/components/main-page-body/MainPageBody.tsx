import { FunctionComponent, useContext } from "react";
import { HotelsContext } from "../../context/hotelsContext";
import { Container, Title } from "./styles";
import HotelList from "../hotel-list";

const MainPageBody: FunctionComponent = () => {
    const { hotels, isLoading } = useContext(HotelsContext);
    return <Container>
        <Title> Select your ski trip </Title>
        {isLoading? "Loading results..." : <HotelList hotels={hotels}/>}
    </Container>
}

export default MainPageBody;