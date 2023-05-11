<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/practice">Practice</RouterLink>
        <RouterLink to="/harry-potter">Harry Potter</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss">
@import './assets/variables/colors.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

a {
  text-decoration: none;
  color: $color-base-white;
}

header {
  line-height: 1.5;
  background-color: $color-base-green;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  padding: 2rem 0;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: $color-base-green;
  background-color: $color-base-white;
  border-radius: 10px;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: .25rem 2rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.container {
  margin: 2rem 0;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    width: 100%;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    width: 100%;
  }

  nav {
    width: 100%;
  }
}
</style>
