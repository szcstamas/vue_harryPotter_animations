<template>
  <div class="info-container" v-for="char in characterArray" :key="char.id">
    <HarryPotterCharacterCard :character-object="char" />
  </div>
</template>

<script>
import HarryPotterCharacterCard from "./HarryPotterCharacterCard.vue";

export default {
  props: {
    characterArray: Array,
  },
  components: {
    HarryPotterCharacterCard,
  },
};
</script>

<style lang="scss" scoped>
.info-container {
  position: relative;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  margin: 4rem 0;

  &::after {
    content: "";
    position: absolute;
    width: 93%;
    height: 2px;
    background-color: #efefef;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
