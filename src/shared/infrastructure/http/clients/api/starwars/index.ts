import ApiSetting from '../../../../config/build-url';
import { HttpApiBaseRepository } from '../../HttpApiBaseRepository';

type Film = {
  title: string;
  director: string;
  releaseDate: string;
  speciesConnection: {
    species: {
      name: string;
      classification: {
        homeworld: {
          name: string;
        };
      };
    };
  };
};

export class StarWar {
  private readonly client: HttpApiBaseRepository;
  public static instance: StarWar;

  private constructor() {
    this.client = new HttpApiBaseRepository();
  }

  static getInstance = (): StarWar => {
    if (!this.instance) {
      this.instance = new StarWar();
      return this.instance;
    }
    return StarWar.instance;
  };

  listTitleFilms = async (): Promise<Array<string>> => {
    const query = `
      query Query {
        allFilms {
          films {
            title
            director
            releaseDate
            speciesConnection {
              species {
                name
                classification
                homeworld {
                  name
                }
              }
            }
          }
        }
      }
    `;
    const response = await this.client.post(
      ApiSetting.buildUrl(
        ApiSetting.urls.apiStarWars,
        ApiSetting.path.getFilms,
        {},
      ),
      { query },
      '',
    );
    const { allFilms } = response.data;
    const { films } = allFilms;
    return films.map((f: Film) => f.title);
  };
}
