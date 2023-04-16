<template>
  <section>
    <div class="characters-container" v-if="characters">
      <h1>Harry Potter API Calls</h1>
      <!-- BAD PRACTICE -- using function inside template -->
      <!-- <div class="info-container" v-for="char in characters" :key="char.id">
        <h4>{{ char.name }}</h4>
        <p>Ancestry: {{ char.ancestry ? char.ancestry : "not known" }}</p>
        <p>
          Date of birth:
          <span v-if="char.dateOfBirth">
            {{ changeDateFormatToHungarian(char.dateOfBirth) }}
          </span>
          <span v-else><i>date of birth is unknown</i></span>
        </p>
      </div> -->

      <!-- GOOD PRACTICE -- using computed -->
      <div
        class="info-container"
        v-for="(char, index) in computedArrayFromCharacters"
        :key="char.id"
      >
        <div class="character-image-box">
          <img :src="char.image" alt="" />
        </div>
        <div class="flex-space-between">
          <h4 class="margin-top-2rem margin-bottom-2rem">{{ char.name }}</h4>
          <span class="character-house">{{ char.house }}</span>
        </div>
        <p>Ancestry: {{ char.ancestry ? char.ancestry : "not known" }}</p>
        <p>
          Date of birth:
          {{ char.dateOfBirth }}
        </p>
        <p v-if="char.wizard">
          {{ char.gender === "female" ? "She" : "He" }} is a wizard.
        </p>
        <div class="flex-space-between margin-top-2rem">
          <p>Color of hair:</p>
          <div
            class="color-hair-box"
            :style="{
              backgroundColor:
                char.hairColour === 'blonde' ? 'yellow' : char.hairColour,
            }"
          ></div>
        </div>
        <ButtonGreen @button-click="routeToSpecificCharacter(char.id)">
          See subpage
        </ButtonGreen>
      </div>
    </div>
  </section>
</template>

<script>
import HarryPotterService from "@/services/HarryPotterService.js";
import ButtonGreen from "../components/buttons/ButtonGreen.vue";

export default {
  components: {
    ButtonGreen,
  },
  data() {
    return {
      characters: null,
    };
  },
  created() {
    HarryPotterService.getCharacters()
      .then((res) => {
        this.characters = res.data.slice(0, 12);
      })
      .catch((error) => {
        console.table([error.code, error.message]);
      });
  },
  methods: {
    changeDateFormatToHungarian(dateString) {
      //01-02-1980
      const year = dateString.substring(6, 10);
      const month = dateString.substring(3, 5);
      const day = dateString.substring(0, 2);

      return `${year}.${month}.${day}.`;
    },
    routeToSpecificCharacter(charId) {
      this.$router.push({
        name: "harry-potter-details",
        params: { id: charId },
      });
    },
  },
  computed: {
    computedArrayFromCharacters() {
      if (this.characters) {
        return this.characters.map((char) => {
          char.dateOfBirth
            ? (char.dateOfBirth = this.changeDateFormatToHungarian(
                char.dateOfBirth
              ))
            : null;
          return char;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 36px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.characters-container {
  position: relative;
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

    h4 {
      font-size: 20px;
      font-weight: bold;
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

    .character-house {
      text-transform: uppercase;
      font-style: italic;
    }
    .color-hair-box {
      width: 25px;
      height: 25px;
      border-bottom-right-radius: 25px;
    }
  }
}
</style>
