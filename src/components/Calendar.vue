<!-- detta är en template för att rendera en kalender -->



<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css'; // Import vue-cal CSS
/* import */ 

export default {
  components: {
    VueCal
  },
  data() {
    return {
      /* events: [
        { start: new Date(), end: new Date(), title: 'Today\'s event' }
      ] */
     events: []
    };
  },
  methods: {
    handleCellClick(date) {
      const newEvent = {
        start: date,                // Use the clicked date as the start time
        end: date,                  // For simplicity, set end time to the same day (can be extended)
        title: 'New Event'          // Default title for the new event
      };
      
      // Push the new event to the events array
      this.events.push(newEvent);

      console.log('New event added:', newEvent);
    },
    addHolidayToCalendar (holidayDate) {
      const newEvent = {
        start: holidayDate,
        end: holidayDate,
        title: holiday.name
      }
    }
  }
}
</script>

<template>
  <div>Add Holidays To Calendar</div>
  <button @click="addHolidayToCalendar">Add Holidays</button>
  <div id="app">
    <vue-cal @cell-click="handleCellClick" :events="events"></vue-cal>
  </div>
</template>

<style>

body {
  background-color: #1C2630;
  color: rgb(224, 224, 224)
}
</style>
