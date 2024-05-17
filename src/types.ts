export interface Field<T> {
  id: string
  label: string
  type: 'number' | 'text' | 'select' | 'array'
  default?: T
  component?: string
}

export interface InputField extends Field<number | string> {
  type: 'number' | 'text'
  placeholder?: string
}

/**
 * SelectField is a field works like a dropdown that allow user to select a value.
 */
export interface SelectField<V> extends Field<V> {
  type: 'select'
  options: string[] // What could we improve?
}

/**
 * ArrayField is a field that allows user to add/edit/remove fields of a specific type.
 * There will be only one specific field type in an array field.
 */
export interface ArrayField<E> extends Field<E[]> {
  items: Field<E>
}

export interface Schema {
  fields: Field[]
}
