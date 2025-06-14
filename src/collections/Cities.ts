// src/collections/Cities.ts

// import { CollectionConfig } from 'payload/types';
// import { CollectionConfig } from 'payload/dist/collections/config/types';
import { CollectionConfig } from "payload";

export const Cities: CollectionConfig = {
  slug: 'cities',
  admin: {
    useAsTitle: 'city',
  },
  fields: [
    {
      name: 'country',
      type: 'text',
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'continent',
      type: 'text',
      required: true,
    },
    {
      name: 'monthlyCost',
      type: 'number',
      required: true,
    },
    {
      name: 'internetSpeed',
      type: 'number',
      required: true,
    },
    {
      name: 'temperature',
      type: 'number',
    },
    {
      name: 'aqi',
      type: 'number',
    },
    {
      name: 'safety',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'badge',
      type: 'text',
      required: false,
    },
    {
      name: 'costRating',
      type: 'number',
    },
    {
      name: 'internetRating',
      type: 'number',
    },
    {
      name: 'safetyRating',
      type: 'number',
    },
    {
      name: 'likedRating',
      type: 'number',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'whyChoose',
      type: 'textarea',
    },
    {
      name: 'visa',
      type: 'group',
      fields: [
        {
          name: 'duration',
          type: 'text',
        },
        {
          name: 'incomeRequirement',
          type: 'text',
        },
        {
          name: 'applicationFee',
          type: 'text',
        },
        {
          name: 'processingTime',
          type: 'text',
        },
        {
          name: 'requirements',
          type: 'array',
          fields: [
            {
              name: 'requirement',
              type: 'text',
            },
          ],
        },
        {
          name: 'benefits',
          type: 'array',
          fields: [
            {
              name: 'benefit',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};
