<template>
  <div id="app">
    <vue-cal @cell-click="handleCellClick" :events="calendarEvents"></vue-cal>
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
  components: {
    VueCal
  },
  props: ['holidays'],
  data() {
    return {
      events: []
    };
  },
  computed: {
    calendarEvents() {
      return this.events.concat(this.holidays.map(holiday => ({
        start: new Date(holiday.date),
        end: new Date(holiday.date),
        title: holiday.localName
      })));
    }
  },
  methods: {
    handleCellClick(date) {
      const newEvent = {
        start: date,
        end: date,
        title: 'New Event'
      };
      this.events.push(newEvent);
    }
  },
  created() {
    console.log('Received holidays:', this.holidays);  // Debug statement to check the holidays data
  }
};
</script>


<style>

body {
  background-color: #1C2630;
  color: rgb(224, 224, 224)
}
</style>
