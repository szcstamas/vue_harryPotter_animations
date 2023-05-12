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
      <div class="character-search-container">
        <input
          type="text"
          placeholder="Search for your wizard..."
          v-model="searchInputCharacters"
        />
      </div>
      <div class="grid-container-of-characters">
        <HarryPotterCharacterCardsList
          :character-array="computedArrayWithChangedDatesAndSearchInput"
        />
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
    HarryPotterCharacterCardsList,
  },
  data() {
    return {
      characters: null,
      searchInputCharacters: "",
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
    arrayFromCharactersWithChangedDateFormat() {
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
    searchedArrayFromCharacters() {
      return this.characters.filter((char) =>
        char.name
          .toLowerCase()
          .includes(this.searchInputCharacters.toLowerCase())
      );
    },
    computedArrayWithChangedDatesAndSearchInput() {
      return this.searchInputCharacters != ""
        ? this.searchedArrayFromCharacters
        : this.arrayFromCharactersWithChangedDateFormat;
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

  .character-search-container {
    @include flex(center, center, column, normal);
    margin-top: 4rem;

    input {
      font-family: inherit;
      font-size: 1rem;
      width: 100%;
      appearance: none;
      outline: 0;
      border: none;
      padding: 1.25rem 2rem;
      border-radius: 10px;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);

      &::placeholder {
        font-family: inherit;
      }
    }
  }

  .grid-container-of-characters {
    @include gridColumnsResponsive(300px, 1rem, 1rem);
    margin-top: 2rem;
  }
}
</style>
