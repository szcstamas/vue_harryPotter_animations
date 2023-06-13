<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <HeaderComponent />
  <main>
    <transition name="slide-fade" mode="out-in">
      <RouterView />
    </transition>
  </main>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
@import "./assets/variables/colors.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

a {
  text-decoration: none;
}

h4 {
  font-size: 1.5rem;
}

main {
  width: 100%;
  max-width: 1400px;
  padding: 4rem 2rem;
  margin: auto;
}

.container {
  margin: 2rem 0;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
}

.width-100 {
  width: 100%;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-1 {
  flex: 1;
}

.padding-2rem {
  padding: 2rem;
}

.margin-top-2rem {
  margin-top: 2rem;
}

.margin-bottom-2rem {
  margin-bottom: 2rem;
}
</style>

// TRANSITIONS
<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.slide-fade-enter-from {
  transform: translateX(50px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .5s ease;
}

.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
</style>
