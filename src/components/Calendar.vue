<template>
  <div id="app">
    <vue-cal @cell-click="handleCellClick" :events="events"></vue-cal>
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css'; // Import vue-cal CSS

export default {
  components: {
    VueCal
  },
  data() {
    return {
      events: [
        { start: new Date(), end: new Date(), title: 'Today\'s event' }
      ]
    };
  },
  methods: {
    handleCellClick(event) {
      console.log('Cell clicked', event);
    }
  }
}
</script>

<style>
/* Add any additional styling you need */
</style>
