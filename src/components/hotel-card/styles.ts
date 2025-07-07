import styled from "styled-components";

export const Container = styled.div`
    height: 18vh;
    width: 60vw;

    display: flex;
    flex-direction: row;

    border: 1px solid #E0E3EB;
    border-radius: 12px;
    border-width: 1px;

    background: #FFFFFF;

    margin-bottom: 20px;
`;

export const ImagePreview = styled.div`
    height: 100%;
    width: 35%;
`;

export const MainImage = styled.img`
    max-height: 100%;
`;

export const HotelMetadata = styled.div`
    height: 100%;
    width: 65%;

    display: flex;
    flex-direction: column;
    align-content: space-between;

    padding: 20px;
`;

export const MetadataField = styled.div`
    padding-bottom: 25px;
`;

export const Name = styled(MetadataField)`
    height: 10%;
`;

export const Rating = styled(MetadataField)`
    height: 10%;
`;

export const Location = styled(MetadataField)`
    height: 10%;

    padding-bottom: 40px;
    border-bottom: 3px solid #bbb;
`;

export const Price = styled(MetadataField)`
    height: 60%;
    width: 100%;

    padding-top: 10px;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;