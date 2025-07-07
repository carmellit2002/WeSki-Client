import { FunctionComponent } from "react";
import { Container, Title } from "./styles";
import HotelList from "../hotel-list";

const MainPageBody: FunctionComponent = () => {
    return <Container>
        <Title> Select your ski trip </Title>
        <HotelList />
    </Container>
}

export default MainPageBody;