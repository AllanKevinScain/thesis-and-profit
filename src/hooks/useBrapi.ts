import { clientBrapi } from "../services/brapi";

export function useBrapi() {
  async function getPETR4() {
    const quote = await clientBrapi.quote.retrieve("PETR4");
    console.log("🚀 ~ getPETR4 ~ quote:", quote);

    return {};
  }

  return {
    getPETR4,
  };
}
