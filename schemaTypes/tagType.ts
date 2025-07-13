import { defineType, defineField, defineArrayMember } from 'sanity'

export const tagType = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {source: 'title'},
        validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'color',
      type: 'color',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'displayInMenu',
      type: 'boolean',
    }),
  ],
})