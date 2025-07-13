import {defineType, defineField, defineArrayMember} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        defineArrayMember(
        { 
          type: "reference",
          to: [
            {type: 'tag'}
          ]
         })  
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Job",
      name: "job",
      type: "reference",
      to: [
        {type: 'job'}
      ]
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Thumbnail',
      name: 'image',
      type: 'image',
    }),
    defineField({
      title: "Gallery",
      name: "gallery",
      type: "array",
      of: [
        defineArrayMember({ type: "image" })  
      ]
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'featuredBody',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'isHeroFeatured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isFeatured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})