import axios, { AxiosInstance } from "axios";

class StarWars {
  apiClient: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.apiClient = api;
  }

  getPerson = (id: number) =>
    this.apiClient.get(`http://localhost:3000/person/${id}`);
}

export const StarWarService = new StarWars(axios);
