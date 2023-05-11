<template>
    <div class="home-container">
        <h1>It's the homepage of practicing VueJS!</h1>
        <p>Let's dive into it! Use those links in my header!</p>
    </div>
</template>

<style lang="scss">
@import '../assets/mixins/flexbox.scss';

.home-container {
    @include flex(center, center, column, 1rem);

    min-height: 60vh;
}
</style>
