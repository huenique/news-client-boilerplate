declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEWSAPI_APIKEY: string;
      RAPIDAPI_APIKEY: string;
    }
  }
}

export { }