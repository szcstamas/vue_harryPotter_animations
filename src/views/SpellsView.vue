<template>
  <section>
    <div class="spells-grid-container">
      <div
        class="spells-box"
        v-for="(spell, id) in slicedArrayOfShownSpells"
        :key="id + ' box of spell'"
      >
        <h4>{{ spell.name }}</h4>
        <p>{{ spell.description }}</p>
      </div>
    </div>
    <div class="spell-more-container">
      <div class="spell-more-container__line"></div>
      <button @click="increaseSpellboxes" class="spell-more-container__plus">
        +
      </button>
      <div class="spell-more-container__line"></div>
      <div class="spell-more-container__note">Show 3 more spells!</div>
    </div>
  </section>
</template>

<script>
import HarryPotterService from "@/services/HarryPotterService.js";

export default {
  data() {
    return {
      spells: [],
      spellBoxes: 3,
      isOpen: false,
    };
  },

  created() {
    HarryPotterService.getSpells()
      .then((res) => {
        this.spells = res.data;
      })
      .catch((error) => {
        console.table([error.code, error.message]);
      });
  },

  methods: {
    increaseSpellboxes() {
      this.spellBoxes += 3;
    },
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },

  computed: {
    slicedArrayOfShownSpells() {
      return this.spells.slice(0, this.spellBoxes);
    },
  },
};
</script>
<style lang="scss" scoped>
.spells-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  grid-auto-rows: 1fr;

  .spells-box {
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.075);
    padding: 2rem;

    h4 {
      margin-bottom: 1rem;
    }
  }
}
.spell-more-container {
  position: relative;

  margin-top: 2rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .spell-more-container__line {
    height: 2px;
    width: 45%;
    background-color: #272727;
  }

  .spell-more-container__plus {
    appearance: none;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 50%;
    border: 2px solid #272727;
    background: transparent;

    width: 60px;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: background 0.1s ease-in-out;

    &:hover {
      background: #272727;
      color: #fff;
    }

    &:hover ~ .spell-more-container__note {
      opacity: 1;
      transform: translate(-50%, 70%);
      visibility: visible;
    }
  }

  .spell-more-container__note {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 60%);
    transition: transform 0.1s ease-in-out, opacity 0.1s ease-in-out,
      visibility 0.1s ease-in-out;

    width: clamp(100px, 25%, 200px);
    height: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #efefef;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.075);

    text-align: center;
  }
}
</style>
