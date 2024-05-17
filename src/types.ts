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

export interface SelectField<V> extends Field<V> {
  type: 'select'
  options: string[]
}

export interface ArrayField<E> extends Field<E[]> {
  items: Field<E>
}

export interface Schema {
  fields: Field[]
}
