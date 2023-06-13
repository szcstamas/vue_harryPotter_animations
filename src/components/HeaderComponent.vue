<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/practice">Practice</RouterLink>
        <RouterLink to="/harry-potter">Harry Potter</RouterLink>
        <RouterLink to="/spells">Spells</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
  import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import '../assets/variables/colors.scss';

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
  transition: all .1s ease-in-out;
}

nav a.router-link-exact-active:hover {
  background-color: $color-base-green-dark;
  color: $color-base-white;
}

nav a {
  color: $color-base-white;
  display: inline-block;
  padding: .25rem 2rem;
  border-left: 1px solid var(--color-border);
  transition: all .1s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
}

nav a:first-of-type {
  border: 0;
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
