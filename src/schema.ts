import { InputField, Schema } from './types'

export default {
  fields: [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
    } as InputField,
    // IntelliSense (autocomplete) seems to be broken here
    // What can we do to improve this?
  ],
} as Schema
