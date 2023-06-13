<template>
  <section>
    <div class="vue-animate">
      <button @click="toggleModal">Open</button>
      <transition name="fade">
        <div v-if="isOpen" class="modal">
          <button @click="toggleModal">Close</button>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.vue-animate {
  text-align: center;
}

button {
  width: 5em;
  height: 2em;
  margin: 0.5em;
  border-radius: 5px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  font-size: 1.5em;
  border: none;
  outline: none;
  cursor: pointer;
}

.modal {
  width: 250px;
  height: 200px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 2%;
  background-color: #e0e0e0;
}
</style>
