import buildUrl from 'build-url-ts';

export default {
  urls: {
    apiStarWars:
      process.env.API_STAR_WARS ||
      'https://swapi-graphql.netlify.app/.netlify/functions/index',
  },
  path: { getFilms: '' },
  buildUrl: (
    url = '',
    path = '',
    queryParams = {},
    hash = '',
    lowerCase = false,
    disableCSV = false,
  ): string => buildUrl(url, {
    path,
    hash,
    lowerCase,
    disableCSV,
    queryParams,
  }),
};
