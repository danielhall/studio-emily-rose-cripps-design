import { defineType, defineField, defineArrayMember } from 'sanity'

export const jobType = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Introduction',
      name: 'introduction',
      type: 'string',
      validation: (rule) => rule.length(215).required(),
    }),
    defineField({
      title: 'Landscape Poster',
      name: 'landscapePoster',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
        title: 'Portrait Poster',
        name: 'portraitPoster',
        type: 'image',
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