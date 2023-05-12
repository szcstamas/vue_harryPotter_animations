<template>
  <div class="character-image-box">
    <img
      :src="characterObject.image"
      :alt="characterObject.image"
      @click="showPopUpOnCharacterImage"
    />
  </div>
  <div class="character-inner-container">
    <div class="flex-space-between width-100">
      <h4 class="margin-top-2rem margin-bottom-2rem">
        {{ characterObject.name }}
      </h4>
      <span class="character-house">{{ characterObject.house }}</span>
    </div>
    <p>
      Ancestry:
      {{ isAncestryKnown }}
    </p>
    <p>
      Date of birth:
      {{ isDateOfBirthKnown }}
    </p>
    <p v-if="characterObject.wizard">{{ characterGender }} is a wizard.</p>
    <div class="flex-space-between width-100 margin-top-2rem">
      <p>Color of hair:</p>
      <div
        class="color-hair-box"
        :style="{
          backgroundColor: characterHairColorYellowIfBlonde,
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
    showPopUpOnCharacterImage() {
      alert(`Hey, my name is ${this.characterObject.name}!`);
    },
  },
  computed: {
    characterGender() {
      return this.characterObject.gender === "female" ? "She" : "He";
    },
    isDateOfBirthKnown() {
      return this.characterObject.dateOfBirth
        ? this.characterObject.dateOfBirth
        : "unknown";
    },
    isAncestryKnown() {
      return this.characterObject.ancestry
        ? this.characterObject.ancestry
        : "unknown";
    },
    characterHairColorYellowIfBlonde() {
      return this.characterObject.hairColour === "blonde"
        ? "yellow"
        : this.characterObject.hairColour;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/mixins/flexbox.scss";
.character-inner-container {
  @include flex(space-between, flex-start, column, 8px);
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
  border-radius: 50%;
  transform: translateX(-50%);
  transition: all 0.5s ease-in-out;
  z-index: 2;
  cursor: pointer;

  &:hover {
    transform: translateX(-50%) translateY(-15px) rotate(360deg);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);

    img {
      filter: grayscale(0);
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    filter: grayscale(1);
    transition: all 0.5s ease-in-out;
  }
}
</style>
