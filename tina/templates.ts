import type { TinaField } from "tinacms";
export function aboutFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "meta_description_title",
      label: "Meta Description Title",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description (up to 160 characters)",
    },
    {
      type: "string",
      name: "page_title",
      label: "Title",
    },
    {
      type: "image",
      name: "cover_image",
      label: "Cover image",
    },
    {
      type: "image",
      name: "first_section_image",
      label: "First section image",
    },
    {
      type: "string",
      name: "first_section_title",
      label: "First Section Title",
    },
    {
      type: "rich-text",
      name: "first_section_text",
      label: "Text below Title",
    },
    {
      type: "string",
      name: "first_section_link_url",
      label: "Button link URL",
      description: "If you don't want a button, leave this blank.",
    },
    {
      type: "string",
      name: "first_section_link_text",
      label: "Button link text",
    },
    {
      type: "image",
      name: "second_section_image",
      label: "Second section image",
    },
    {
      type: "string",
      name: "food_title",
      label: "Food Title",
    },
    {
      type: "rich-text",
      name: "food_text",
      label: "Food Text",
    },
    {
      type: "string",
      name: "beverage_title",
      label: "Beverage Title",
    },
    {
      type: "rich-text",
      name: "beverage_text",
      label: "Beverage Text",
    },
    {
      type: "string",
      name: "person_proffesion",
      label: "Person Role",
    },
    {
      type: "string",
      name: "person_name",
      label: "Person Name",
    },
    {
      type: "image",
      name: "person_image",
      label: "Person Image",
    },
    {
      type: "rich-text",
      name: "testimonial_text",
      label: "Food Text",
    },
  ] as TinaField[];
}

export function ourSpacesFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "meta_description_title",
      label: "Meta Description Title",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description (up to 160 characters)",
    },
    {
      type: "string",
      name: "page_title",
      label: "Title",
    },
    {
      type: "image",
      name: "cover_image",
      label: "Cover image",
    },
    {
      type: "rich-text",
      name: "text_below_cover_image",
      label: "Text below cover image",
    },
    {
      type: "object",
      name: "list_of_rooms",
      label: "List of rooms",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.room_name} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "room_name",
          label: "Name",
        },
        {
          type: "image",
          name: "room_image",
          label: "Image",
        },
        {
          type: "rich-text",
          name: "room_text",
          label: "Text",
        },
        {
          type: "string",
          name: "whole_space_capacity_title",
          label: "Capacity Title",
          // description: "If you don't want options below, leave this blank.",
        },
        {
          type: "object",
          name: "whole_space_capacity_items",
          label: "Capacity Items",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.name}: ${item?.number}pax`}
            },
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
              description: "If you don't want options below, leave this blank.",
            },
            {
              type: "image",
              name: "number",
              label: "Number",
            },
          ]
        },
        {
          type: "string",
          name: "divided_space_capacity_title",
          label: "Capacity Title",
          description: "If you don't want options below, leave this blank.",
        },
        {
          type: "object",
          name: "whole_space_capacity_items",
          label: "Capacity Items",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.name}: ${item?.number}pax`}
            },
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
              description: "If you don't want options below, leave this blank.",
            },
            {
              type: "image",
              name: "number",
              label: "Number",
            },
          ]
        },
        {
          type: "image",
          name: "room_link_image",
          label: "Floorplan image",
        },
        {
          type: "string",
          name: "room_link_text",
          label: "Floorplan button text",
        }
      ],
    },
    {
      type: 'boolean',
      name: 'activate_slider',
      label: 'Activate Image slider'
    },
    {
      type: "object",
      name: "slider_images",
      label: "Images for Slider",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.alt_text} `}
        },
      },
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "alt_text",
          label: "Image alt text",
        }
      ],
    },

  ] as TinaField[];
}

export function experiencesFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "meta_description_title",
      label: "Meta Description Title",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description (up to 160 characters)",
    },
    {
      type: "string",
      name: "page_title",
      label: "Title",
    },
    {
      type: "image",
      name: "cover_image",
      label: "Cover image",
    },
    {
      type: "object",
      name: "experiences",
      label: "Experiences",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "image",
          name: "img",
          label: "Image",
        },
        {
          type: "rich-text",
          name: "text",
          label: "Text",
        },
        {
          type: "string",
          name: "button_link",
          label: "Button link",
        },
        {
          type: "string",
          name: "button_text",
          label: "Button text",
        }
      ],
    },
  ] as TinaField[];
}

export function galleryFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "meta_description_title",
      label: "Meta Description Title",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description (up to 160 characters)",
    },
    {
      type: "string",
      name: "page_title",
      label: "Title",
    },
    {
      type: "object",
      name: "images_group",
      label: "Group of images",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title} `}
        },
      },
      fields: [
        {
          type: "object",
          name: "images",
          label: "Images -> must be 4",
          description: "Images must be formated like image1, image2, image3, image4",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title} `}
            },
          },
          fields: [
            {
              type: "image",
              name: "path",
              label: "Image",
            },
            {
              type: "string",
              name: "alt",
              label: "Image alt text",
            }
          ],
        },
      ],
    },
  ] as TinaField[];
}


export function contactFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "meta_description_title",
      label: "Meta Description Title",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description (up to 160 characters)",
    },
    {
      type: "string",
      name: "page_title",
      label: "Title",
    },
    {
      type: "string",
      name: "text_below_page_title",
      label: "Text above form",
    },
    {
      type: "string",
      name: "title_above_map",
      label: "Title above map",
    }
    
  ] as TinaField[];
}