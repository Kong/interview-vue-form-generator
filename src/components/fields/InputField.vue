<template>
  <KInput :label="field.label" :placeholder="field.placeholder" />
</template>

<script setup lang="ts">
import { InputField } from '../../types';

defineProps<{
  field: InputField
}>()
</script>