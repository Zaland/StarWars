import { Express } from "express";
import axios from "axios";

interface Homeworld {
  title?: string;
  terrain?: string;
  population?: string;
}

interface Species {
  name?: string;
  averageLifespan?: string;
  classification?: string;
  language?: string;
}

interface Films {
  title?: string;
  director?: string;
  producers?: string;
  releaseDate?: string;
}

export const initRoutes = (app: Express) => {
  app.get("/getPerson", async (req, res) => {
    const { id } = req.query;

    const personData = await axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => response.data);

    console.log({ personData });

    let homeworldData: Homeworld = {};
    if (personData.homeworld) {
      const { name, terrain, population } = await axios
        .get(personData.homeworld)
        .then((response) => response.data);

      console.log({ homeworldData });

      homeworldData.title = name;
      homeworldData.terrain = terrain;
      homeworldData.population = population;
    }

    let speciesData: Species[] = [];
    if (personData.species.length) {
      for (const species of personData.species) {
        const speciesResponse = await axios
          .get(species)
          .then((response) => response.data);

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
        const filmResponse = await axios
          .get(film)
          .then((response) => response.data);

        filmsData.push({
          title: filmResponse.title,
          director: filmResponse.director,
          producers: filmResponse.producer,
          releaseDate: filmResponse.release_date,
        });
      }
    }

    // return organized data
    res.send({
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
  });
};
