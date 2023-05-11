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
      <div class="grid-container-of-characters">
        <HarryPotterCharacterCardsList :character-array="computedArrayFromCharacters" />
      </div>
    </div>
  </section>
</template>

<script>
import HarryPotterService from "@/services/HarryPotterService.js";
import ButtonGreen from "../components/buttons/ButtonGreen.vue";
import HarryPotterCharacterCardsList from "../components/HarryPotterCharacterCardsList.vue";

export default {
  components: {
    ButtonGreen,
    HarryPotterCharacterCardsList
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
@import "../assets/mixins/grid.scss";
@import "../assets/mixins/flexbox.scss";

h1 {
  font-size: 36px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.characters-container {
  position: relative;

  .grid-container-of-characters {
    @include gridColumnsResponsive(300px, 1rem, 1rem);
    margin-top: 2rem;

  }
}
</style>
