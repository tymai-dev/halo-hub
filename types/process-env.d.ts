declare namespace NodeJS {
  interface ProcessEnv {
    RESEND_API_KEY?: string;
    ADMIN_EMAIL?: string;
  }
}

declare const process: {
  env: NodeJS.ProcessEnv;
};
