<template>
  <button class="fancy">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.fancy {
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  outline: none;
  border: none;
  padding: 1rem;
  color: white;
  appearance: none;
  cursor: pointer;
  margin-top: 1rem;
  background: linear-gradient(45deg, red, blue);
}
</style>
