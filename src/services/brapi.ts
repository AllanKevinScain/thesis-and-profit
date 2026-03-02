import Brapi from "brapi";

export const clientBrapi = new Brapi({
  apiKey: import.meta.env.VITE_BRAPI_TOKEN,
});
