// configs/dev.env.ts
export default {
  baseURL: 'https://dev.search.collegeboard.org',
  user: 'devUser',
  password: 'devPass',
  proxy: {
    server: 'http://proxy.dev.aws.local',
    bypass: ['search.collegeboard.org', 's3.amazonaws.com']
  }
};