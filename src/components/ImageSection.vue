<template>
  <section
    class="flex flex-wrap container"
    style="resize: both"
    :style="{
      flexDirection: directionOfBox,
    }"
  >
    <div class="flex-1 padding-2rem image-content">
      <h1>{{ imageText?.title }}</h1>
      <h4>{{ imageText?.description }}</h4>
    </div>
    <div class="flex-1 image-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    imageText: Object,
    directionOfBox: String,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
}
.image-container {
  flex: 1 1 120px;
  aspect-ratio: 1/1;
  height: 100%;
}
.image-content {
  flex: 1 1 200px;
}
</style>
