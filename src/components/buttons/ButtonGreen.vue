<template>
  <button class="button-green" @click="$emit('button-click')">
    <slot></slot>
  </button>
</template>
<script>
export default {
  emits: ["button-click"],
};
</script>

<style lang="scss" scoped>
.button-green {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  width: 100%;
  padding: 1rem 2rem;
  background: green;
  color: #fff;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background: rgb(0, 98, 0);
  }
}
</style>
