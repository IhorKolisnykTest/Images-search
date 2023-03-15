import { httpClient } from "./httpClient";

const key = process.env.REACT_APP_API_KEY;

export const imagesService = {
  getImages: async (searchParams) =>
    await httpClient
      .get("", {
        params: {
          key,
          lang: "en",
          q: searchParams.query,
          page: searchParams.page || 1,
          image_type: "photo",
          per_page: 9,
        },
      })
      .then((res) => res.data),
};
