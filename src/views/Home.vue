<template>
  <div >
    <section id="home">
      <TheHeader />
      <TheFooter />
    </section>

  <div class="sheet-wrapper">
<v-sheet
  color="white"
  elevation="1"
  height="600px"
  width="500px"
></v-sheet>
  </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style >
  .sheet-wrapper {
    display: flex;
    justify-content: center;
  }
</style>