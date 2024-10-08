const BASE_URL = `https://disney_api.nomadcoders.workers.dev`;

export function fetchCharacters() {
    return fetch(`${BASE_URL}/characters`).then((response) => response.json());
}

export function fetchCharactersInfo(characterId: string) {
    return fetch(`${BASE_URL}/${characterId}`).then((response) => response.json());
}