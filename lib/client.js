import sanityClient from "@sanity/client";
import imgeUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "zvjucehs",
  dataset: "production",
  apiVersion: "2022-04-23",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imgeUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
