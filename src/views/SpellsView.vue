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
    <div
      v-if="slicedArrayOfShownSpells.length != spells.length"
      class="spell-more-container"
    >
      <div class="spell-more-container__line"></div>
      <button @click="increaseSpellboxes" class="spell-more-container__plus">
        +
      </button>
      <div class="spell-more-container__line"></div>
      <div class="spell-more-container__note">
        Show {{ this.modifierNumberOfSpellBoxes }} more spells!
      </div>
    </div>

    <div
      v-if="slicedArrayOfShownSpells.length >= lengthOfSlicedArrayOfShownSpells"
      class="spell-more-container"
    >
      <div class="spell-more-container__line"></div>
      <button @click="decreaseSpellboxes" class="spell-more-container__plus">
        -
      </button>
      <div class="spell-more-container__line"></div>
      <div class="spell-more-container__note">
        Show {{ this.modifierNumberOfSpellBoxes }} less spells!
      </div>
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
      modifierNumberOfSpellBoxes: 6,
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
      this.spellBoxes += this.modifierNumberOfSpellBoxes;
    },
    decreaseSpellboxes() {
      this.spellBoxes -= this.modifierNumberOfSpellBoxes;
    }
  },

  computed: {
    slicedArrayOfShownSpells() {
      return this.spells.slice(0, this.spellBoxes);
    },
    lengthOfSlicedArrayOfShownSpells() {
      return this.spells.slice(0, this.modifierNumberOfSpellBoxes).length
    }
  },
};
</script>
<style lang="scss" scoped>
section {
  padding-bottom: 4rem;
}

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
      z-index: 1000;
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
