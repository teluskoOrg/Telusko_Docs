import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '6fb7706390d22f2611f9cb7509918c4498864783', queries,  });
export default client;
  