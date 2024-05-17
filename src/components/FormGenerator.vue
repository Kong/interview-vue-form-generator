<template>
  <component v-for="field in schema.fields" :is="getFieldComponent(field)" :field="field" />
</template>

<script setup lang="ts">
import { Field, Schema } from '../types';
import InputField from './fields/InputField.vue';

defineProps<{
  schema: Schema
}>()

const getFieldComponent = (field: Field) => {
  if (field.component) {
    return field.component
  }

  switch (field.type) {
    case 'number':
    case 'text': {
      return InputField
    }
  }

  return undefined
}
</script>
