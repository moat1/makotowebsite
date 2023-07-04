declare namespace NodeJS {
  interface ProcessEnv {
    readonly MICROCMS_API_KEY: string;
    readonly MICROCMS_SERVICE_DOMAIN: string;
  }
}
