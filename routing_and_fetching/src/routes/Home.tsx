import { useQuery } from "@tanstack/react-query" 
import styled from "styled-components";
import { fetchCharacters } from "../api";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 0px, 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const CharacterList = styled.ul``;

const Character = styled.li`
    background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;
interface ICharacter {
    id: string,
    name: string,
    imageUrl:string
}

function Home() {
    const { isLoading, data } = useQuery<ICharacter[]>({queryKey: ["allCharacters"], queryFn: fetchCharacters()});
    console.log(data);
    return(
        <Container>
            <Header>
                <Title>Disney Characters!</Title>
            </Header>
            {isLoading ? (<Loader>Loading!!!</Loader>) : (
                <CharacterList>
                    {data?.slice(0, 50).map((characters) => (
                        <Character>
                            <Link 
                                to={{
                                    pathname: `/characters/${characters.id}`,
                                    state: { name: characters.name},
                            }}>
                                <Img
                                    src={characters.imageUrl}    
                                />
                                {characters.name}
                            </Link>
                        </Character>
                    ))}
                </CharacterList>
            )}
        </Container>
    );
}
export default Home;