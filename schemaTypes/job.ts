import { defineType, defineField, defineArrayMember } from 'sanity'

export const job = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Year',
      name: 'year',
      type: 'number',
      validation: (rule) => rule.integer(),
    }),
    defineField({
        title: 'Thumbnail',
        name: 'image',
        type: 'image',
    }),
  ],
})