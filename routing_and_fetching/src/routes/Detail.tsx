import { useParams } from "react-router";
import styled from "styled-components";
import { useHistory } from "react-router-dom"
import { useQuery } from "react-query";
import { fetchCharactersInfo } from "../api";

const Container = styled.div`

`;

const Name = styled.div`
`;

const Film = styled.div`
`;


interface RouteParams {
    id: number;
    characters: string;
    films: string[];
    imageUrl: string;
}

interface ICharacter {
    
}

function Detail() {
    const { id } = useParams()
    const { isLoading, data } = useQuery({queryKey: ["allCharacters"], queryFn: fetchCharactersInfo()});
    const GoBack = () => {
        useHistory.push('/Home'); //뒤로가기 기능
    }
    return(
        <Container>
            <div onClick={GoBack}>&larr;</div>
            {/* <img src={`https://disney_api.nomadcoders.workers.dev/characters/${characters.imageUrl}`} />
            <Name>{charactersId?.name}</Name>
            <Film>{charactersId.films.map((films) => (
                <div>
                    {films}
                </div>
            ))}</Film> */}
        </Container>
    );
}
export default Detail;