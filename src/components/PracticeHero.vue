<template>
  <section>
    <div>
      <h1>{{ message.title }}</h1>
      <p>{{ message.desc }}</p>
      <p
        :style="{
          fontSize: enlargedFontsize + 'rem',
        }"
        class="computed"
      >
        {{ computedNumberFromChild }}
      </p>
      <button class="button green" @click="$emit('increase-number')">
        Increase number
      </button>
      <button class="button red" @click="$emit('enlarge-number')">
        Enlarge number
      </button>
      <ButtonSlot>
        <h1>{{ slotHeadline }}</h1>
      </ButtonSlot>
      <ImageSection
        v-for="(el, index) in imageArray"
        :imageText="el"
        :directionOfBox="index % 2 == 0 ? 'row-reverse' : 'initial'"
      >
        <img class="image" :src="el.imageSrc" />
      </ImageSection>
    </div>
  </section>
</template>

<script>
import ButtonSlot from "./ButtonSlot.vue";
import ImageSection from "./ImageSection.vue";

export default {
  components: {
    ButtonSlot,
    ImageSection,
  },
  props: {
    message: Object,
    computedNumberFromChild: Number,
    enlargedFontsize: Number,
    slotHeadline: String,
  },
  emits: ["increase-number", "enlarge-number"],
  data() {
    return {
      text: {
        title: "This is the image title",
        description: "This is the description of image title.",
      },
      imageArray: [
        {
          imageSrc:
            "https://i.pinimg.com/474x/9c/db/1e/9cdb1ef2587344694349dd7abd5bf776.jpg",
          title: "This is the first headline",
          description: "Desc 1",
        },
        {
          imageSrc:
            "https://www.wargamer.com/wp-content/sites/wargamer/2022/12/dnd-silverplate-5e-food-books-donut-barbarian.jpg",
          title: "It's the second headline",
          description: "Desc 2",
        },
        {
          imageSrc:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/12/Dungeons-and-Dragons-Beholder-Hovering.jpg",
          title: "Third headline",
          description: "Desc 3",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.button {
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  outline: none;
  border: none;
  padding: 1rem;
  color: white;
  appearance: none;
  cursor: pointer;
  margin-top: 1rem;
  width: 200px;
}
.green {
  background: green;
}
.red {
  background: rgb(129, 2, 2);
}
.computed {
  font-size: 48px;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
