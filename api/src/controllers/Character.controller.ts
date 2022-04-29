import axios, { AxiosInstance } from "axios";
import { Request, Response, NextFunction } from "express";
import { Films, Homeworld, Species } from "../../../types";

export class Character {
  private Axios: AxiosInstance;

  constructor() {
    this.Axios = axios;
  }

  get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const personData = await this.Axios.get(
        `https://swapi.dev/api/people/${id}`
      ).then((response) => response.data);

      let homeworldData: Homeworld = {};
      if (personData.homeworld) {
        const { name, terrain, population } = await this.Axios.get(
          personData.homeworld
        ).then((response) => response.data);

        homeworldData.title = name;
        homeworldData.terrain = terrain;
        homeworldData.population = population;
      }

      let speciesData: Species[] = [];
      if (personData.species.length) {
        for (const species of personData.species) {
          const speciesResponse = await this.Axios.get(species).then(
            (response) => response.data
          );

          speciesData.push({
            name: speciesResponse.name,
            averageLifespan: speciesResponse.average_lifespan,
            classification: speciesResponse.classification,
            language: speciesResponse.language,
          });
        }
      }

      let filmsData: Films[] = [];
      if (personData.films.length) {
        for (const film of personData.films) {
          const filmResponse = await this.Axios.get(film).then(
            (response) => response.data
          );

          filmsData.push({
            title: filmResponse.title,
            director: filmResponse.director,
            producers: filmResponse.producer,
            releaseDate: filmResponse.release_date,
          });
        }
      }

      // return organized data
      res.status(200).json({
        name: personData.name,
        height: personData.height,
        mass: personData.mass,
        hairColor: personData.hair_color,
        skinColor: personData.skin_color,
        gender: personData.gender,
        birthYear: personData.birth_year,
        homeworld: homeworldData,
        species: speciesData,
        films: filmsData,
      });
    } catch (error) {
      next(error);
    }
  };
}

export const CharacterController = new Character();
