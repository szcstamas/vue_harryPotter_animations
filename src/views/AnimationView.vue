<template>
  <section>
    <!-- 0 section -->
    <div class="vue-animate">
      <h4 class="vue-animation-h4">
        Basic animation using transition-component
      </h4>
      <button @click="toggleModal">Open</button>
      <transition name="fade">
        <div v-if="isOpen" class="modal">
          <button @click="toggleModal">Close</button>
        </div>
      </transition>
    </div>

    <hr style="margin: 4rem 0" />
    <!-- 1st section -->
    <div class="vue-animate input-container">
      <h4 class="vue-animation-h4">Using transition-group component</h4>
      <input v-model="newContact" placeholder="Name" type="text" />
      <button @click="addContact">Add Contact</button>
      <button @click="sortContact">Sort Contact</button>

      <TransitionGroup
        class="vue-animated-input-container"
        name="slide-up"
        tag="ul"
        appear
      >
        <li v-for="(contact, index) in contacts" :key="index">
          {{ contact }}
        </li>
      </TransitionGroup>
    </div>

    <hr style="margin: 4rem 0" />
    <!-- 2nd section -->
    <div class="input-container drawer-container">
      <h4 class="vue-animation-h4">
        Advanced animations using JS Hooks with Velocity
      </h4>
      <button @click="isDrawerOpen = !isDrawerOpen">My Profile</button>

      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false"
      >
        <div v-if="isDrawerOpen" class="drawer">
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            alt="avatar"
          />
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </transition>
    </div>

    <hr style="margin: 4rem 0" />
    <!-- 3rd section -->
    <div class="input-container drawer-container">
      <h4 class="vue-animation-h4">More complex animations using GSAP (reload page when seeing this section)</h4>
      <transition
        appear
        @before-enter="beforeGSAPEnter"
        @enter="enterGSAP"
        :css="false"
      >
        <div class="card"></div>
      </transition>
    </div>

    <hr style="margin: 4rem 0" />
    <!-- 4th section -->
    <div class="input-container">
        <h4 class="vue-animation-h4">Second example for GSAP Staggering</h4>
      <div id="container">
        <div
          v-for="card in cards"
          :key="card.id"
          class="card-second-example"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
import Velocity from "velocity-animate";
import gsap from "gsap";

export default {
  data() {
    return {
      isOpen: false,
      isDrawerOpen: false,
      newContact: "",
      contacts: ["Beau Thabeast", "Cindy Rella", "Alice Wunderlind"],
      cards: [
        { id: 1298 },
        { id: 8748 },
        { id: 4919 },
        { id: 5527 },
        { id: 9428 },
        { id: 7103 },
      ],
    };
  },

  mounted() {
    gsap.from('.card-second-example', {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: 'power1',
      stagger: {
        each: 0.1,
        from: 'center'
      }
    })
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
      this.contacts.sort();
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.width = "0em";
    },
    enter(el, done) {
      Velocity(
        // element to animate
        el,
        // animation properties
        { opacity: 1, width: "12em" },
        { duration: 1000, easing: [20, 5], complete: done }
      );
    },
    leave(el, done) {
      Velocity(
        // element to animate
        el,
        // animation properties
        { opacity: 0, width: "0em" },
        { duration: 500, easing: "easeInCubic", complete: done }
      );
    },
    beforeGSAPEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "scale(0,0)";
    },
    enterGSAP(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "bounce.out",
        onComplete: done,
      });
    },
  },
};
</script>

// LOCAL STYLES
<style scoped>
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
  margin: 0.25rem;
}

img {
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
}

.drawer-container {
  text-align: center;
}

.drawer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12em;
  height: 20em;
  border-radius: 1%;
  background-color: #e0e0e0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
  padding-top: 0.7em;
}

.drawer div {
  height: 3.5em;
  width: 95%;
  margin-top: 0.6em;
  background-color: #f0f0f0;
  border: 0.02em solid #ababab;
  border-radius: 1%;
}

.vue-animation-h4 {
  background-color: #efefef;
  padding: 1rem;
  border-radius: 10px;

  text-align: center;

  width: clamp(25%, 750px, 100%);
  margin: auto;
  margin-bottom: 2rem;
}

.card {
  display: block;
  margin: 0 auto 0 auto;
  height: 6.5em;
  width: 6.5em;
  border-radius: 1%;
  background-color: #16c0b0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
}

#container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.card-second-example {
  height: 6.5em;
  width: 6.5em;
  border-radius: 1%;
  background-color: #16c0b0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
  padding-top: 1em;
  margin-top: 0.5em;
  margin-right: 0.5em;
}
</style>
