import { InputField, Schema } from './types'

export default {
  fields: [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
    } as InputField,
  ],
} as Schema
