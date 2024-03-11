import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCharactersInfo } from "../api";

const Container = styled.div``;

const Name = styled.div``;

const Film = styled.div``;

interface RouteParams {
  characterId: string;
}

interface ICharacter {
  id: number;
  characters: string;
  films: string[];
  imageUrl: string;
}

function Detail() {
  const { characterId } = useParams<RouteParams>();
  const { isLoading, data } = useQuery("allCharacters", () =>
    fetchCharactersInfo(characterId)
  );
  const GoBack = () => {
    useHistory.push("/Home"); //뒤로가기 기능
  };
  return (
    <Container>
      <div onClick={GoBack}>&larr;</div>
      <img
        src={`https://disney_api.nomadcoders.workers.dev/characters/${characterId.imageUrl}`}
      />
      <Name>{characterId?.name}</Name>
      <Film>
        {characterId.films.map((films) => (
          <div>{films}</div>
        ))}
      </Film>
    </Container>
  );
}
export default Detail;
