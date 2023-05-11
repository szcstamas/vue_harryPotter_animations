<template>
  <div class="character-image-box">
    <img :src="characterObject.image" :alt="characterObject.image" />
  </div>
  <div class="character-inner-container">
    <div class="flex-space-between width-100">
      <h4 class="margin-top-2rem margin-bottom-2rem">
        {{ characterObject.name }}
      </h4>
      <span class="character-house">{{ characterObject.house }}</span>
    </div>
    <p>Ancestry: {{ characterObject.ancestry ? characterObject.ancestry : "not known" }}</p>
    <p>
      Date of birth:
      {{ characterObject.dateOfBirth }}
    </p>
    <p v-if="characterObject.wizard">
      {{ characterObject.gender === "female" ? "She" : "He" }} is a wizard.
    </p>
    <div class="flex-space-between width-100 margin-top-2rem">
      <p>Color of hair:</p>
      <div
        class="color-hair-box"
        :style="{
          backgroundColor:
            characterObject.hairColour === 'blonde' ? 'yellow' : characterObject.hairColour,
        }"
      ></div>
    </div>
    <ButtonGreen @button-click="routeToSpecificCharacter(characterObject.id)">
      See subpage
    </ButtonGreen>
  </div>
</template>

<script>
import ButtonGreen from "./buttons/ButtonGreen.vue";

export default {
  components: {
    ButtonGreen,
  },
  props: {
    characterObject: Object,
  },
  methods: {
    routeToSpecificCharacter(charId) {
      this.$router.push({
        name: "harry-potter-details",
        params: { id: charId },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/mixins/flexbox.scss';
.character-inner-container {
  @include flex(space-between, flex-start, column, normal);
  height: 100%;
}

h4 {
  font-size: 20px;
  font-weight: bold;
}
.character-house {
  text-transform: uppercase;
  font-style: italic;
}
.color-hair-box {
  width: 25px;
  height: 25px;
  border-bottom-right-radius: 25px;
}
.character-image-box {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 50%;
  top: -40px;
  transform: translateX(-50%);
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>
