import axios, { AxiosInstance } from "axios";

class StarWars {
  apiClient: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.apiClient = api;
  }

  getCharacter = (id: number) =>
    this.apiClient.get(`http://localhost:3000/character/${id}`);
}

export const StarWarService = new StarWars(axios);
