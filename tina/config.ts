import { defineConfig } from "tinacms";
import { aboutFields } from "./templates";
import { ourSpacesFields } from "./templates";
import { experiencesFields } from "./templates";
import { galleryFields } from "./templates";
import { contactFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =  "main";

export default defineConfig({
  branch,
  clientId: "7656a2de-4284-4176-83d6-1344ffb675dc", // Get this from tina.io
  token: "31d9a6fc689ce6aa2feded63bfa3655d32890ac8", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "/assets/images",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        label: 'Pages',
        name: 'page',
        path: '_pages',
        format: 'md',
        templates: [
          {
            name: 'about',
            label: 'About page',
            fields: aboutFields(),
          },
          {
            name: 'eventspaces',
            label: 'Our Spaces page',
            fields: ourSpacesFields(),
          },
          {
            name: 'experiences',
            label: 'Experiences page',
            fields: experiencesFields(),
          },
          {
            name: 'gallery',
            label: 'Gallery page',
            fields: galleryFields(),
          },
          {
            name: 'contact',
            label: 'Contact page',
            fields: contactFields(),
          },
        ]
      },
    ],
  },
});
