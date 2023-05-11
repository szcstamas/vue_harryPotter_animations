<template>
  <div class="skeleton-character-container">
    <h4></h4>
    <div class="flex-space-between skeleton-character-name-box">
      <h1 class="skeleton-character-name"></h1>
      <p class="skeleton-character-house"></p>
    </div>
    <i></i>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="skeleton-character-image-box">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/variables/colors.scss';
.skeleton-character-container {
  position: relative;
  margin-top: 2rem;
  padding: 4rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

  h4 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    margin: 2rem 0 1rem 0;
  }
  .skeleton-character-name-box {
    margin-bottom: 4rem;
  }
  .skeleton-character-name {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 48px;
    font-weight: bold;
    line-height: 55px;
    background-color: $color-base-dark-soft;
    animation: bg-vibrate 2s linear infinite;
    padding: 1rem;
    width: 300px;
  }
  .skeleton-character-house {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    color: #ccc;
    text-transform: uppercase;
  }
  ul {
    padding-left: 2rem;
    width: 50%;

    li {
      margin: 1rem 0;
      padding: 1rem;
      background-color: $color-base-dark-soft;
      animation: bg-vibrate 2s linear infinite;
    }
  }
  .skeleton-character-image-box {
    position: absolute;
    width: 250px;
    height: 300px;
    bottom: 0;
    right: 0;
    border-top-left-radius: 50%;
    opacity: 0.5;
    overflow: hidden;
    background-color: $color-base-dark-soft;
    animation: bg-vibrate 2s linear infinite;
  }

  @keyframes bg-vibrate {
    0% {
        background-color: $color-base-dark-medium;
    }
    50% {
        background-color: $color-base-dark-soft;
    }
    100% {
        background-color: $color-base-dark-medium;
    }
  }
}
</style>
