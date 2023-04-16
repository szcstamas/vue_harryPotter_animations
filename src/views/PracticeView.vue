<template>
  <PracticeHero
    :message="messageContent"
    :computedNumberFromChild="computedCount"
    :enlargedFontsize="fontSize"
    @increase-number="increaseNumber"
    @enlarge-number="enlargeNumber"
    :slotHeadline="headline"
  />
</template>

<script>
import PracticeHero from "@/components/PracticeHero.vue";

export default {
  components: {
    PracticeHero,
  },
  data() {
    return {
      count: 0,
      fontSize: 2,
      messageContent: {
        title: "Hello Wooorld!",
        desc: "I am the description!",
      },
      headline: "I'm coming from the biggest parent view!",
    };
  },
  methods: {
    increaseNumber() {
      this.count += 1;
    },
    enlargeNumber() {
      this.fontSize += 1;
    },
  },
  computed: {
    computedCount() {
      return this.count + 2;
    },
  },
};
</script>

<style lang="scss" scoped></style>
