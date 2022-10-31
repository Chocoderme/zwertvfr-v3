<template>
  <input v-model="value" :type="type" :autocomplete="autocomplete" :placeholder="placeholder" :aria-required="required"
    :required="required" :disabled="disabled" />
</template>

<script lang="ts" setup>

interface Props {
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  modelValue: string;
  autocomplete?:
  | "off"
  | "on"
  | "name"
  | "honorific-prefix"
  | "given-name"
  | "additional-name"
  | "family-name"
  | "honorific-suffix"
  | "nickname"
  | "email"
  | "username"
  | "new-password"
  | "current-password"
  | "one-time-code"
  | "organization-title"
  | "organization"
  | "street-address"
  | "address-line1"
  | "address-line2"
  | "address-line3"
  | "address-level4"
  | "address-level3"
  | "address-level2"
  | "address-level1"
  | "country"
  | "country-name"
  | "postal-code"
  | "cc-name"
  | "cc-given-name"
  | "cc-additional-name"
  | "cc-family-name"
  | "cc-number"
  | "cc-exp"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-csc"
  | "cc-type"
  | "transaction-currency"
  | "transaction-amount"
  | "language"
  | "bday"
  | "bday-day"
  | "bday-month"
  | "bday-year"
  | "sex"
  | "tel"
  | "tel-country-code"
  | "tel-national"
  | "tel-area-code"
  | "tel-local"
  | "tel-extension"
  | "impp"
  | "url"
  | "photo";
  type?:
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

}

interface Events {
  (e: 'update:modelValue', val: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  required: false,
  disabled: false,
  readonly: false,
  type: 'text',
  autocomplete: 'off'
});
const emit = defineEmits<Events>();

const { modelValue } = toRefs(props);

const value = computed({
  get(): string { return modelValue.value },
  set(val: string): void { emit('update:modelValue', val); }
})

</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

input {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: map.get($text-colors, "base");
  background-color: map.get($colors, "white");
  background-clip: padding-box;
  border: 1px solid #b9c1cd;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  font-family: inherit;

  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;

  &:focus {
    color: map.get($text-colors, "base");
    background-color: map.get($colors, "white");
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }


  &::-webkit-input-placeholder {
    color: map.get($text-colors, "light");
    opacity: 1;
  }

  &::-moz-placeholder {
    color: map.get($text-colors, "light");
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: map.get($text-colors, "light");
    opacity: 1;
  }

  &::placeholder {
    color: map.get($text-colors, "light");
    opacity: 1;
  }

  &:disabled,
  &[readonly] {
    background-color: #eaedf0;
    opacity: 1;
  }
}
</style>