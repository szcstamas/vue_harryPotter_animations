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

    <hr style="margin: 4rem 0;">

    <div class="vue-animate input-container">
          <input v-model="newContact" placeholder="Name" type="text" />
          <button @click="addContact">Add Contact</button>
          <button @click="sortContact">Sort Contact</button>

          <TransitionGroup class="vue-animated-input-container" name="slide-up" tag="ul" appear>
            <li v-for="(contact, index) in contacts" :key="index">
              {{ contact }}
            </li>
          </TransitionGroup>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      newContact: "",
      contacts: ["Beau Thabeast", "Cindy Rella", "Alice Wunderlind"],
    };
  },

  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
    addContact() {
      this.contacts.push(this.newContact);
      this.newContact = "";
    },
    sortContact() {
      this.contacts.sort()
    }
  },
};
</script>

<style>
.vue-animated-input-container {
  position: relative;
}

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

.input-container {
  margin-top: 3em;
}

.input-container :is(button) {
  width: auto;
  height: auto;
  padding: 1rem 1.5rem;
}

.input-container :is(input) {
  padding: 1.25rem;
  font-size: 1rem;
}

.input-container :is(input)::placeholder {
  font-size: 1rem;
}

ul {
  list-style: none;
  width: auto;
  margin: 1rem auto auto auto;
  text-align: center;
}

ul li {
  font-size: 1.25rem;
  margin: .25rem;
}
</style>
