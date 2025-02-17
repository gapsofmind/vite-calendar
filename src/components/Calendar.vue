<!-- detta är en template för att rendera en kalender -->
<template>
  <div>Add Holidays To Calendar</div>
  <button @click="addHolidayToCalendar">Add Holidays</button>
  <div id="app">
    <vue-cal @cell-click="handleCellClick" :events="events"></vue-cal>
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css'; 

export default {
  components: {
    VueCal
  },
  data() {
    return {
     events: []
    };
  },
  methods: {
    handleCellClick(date) {
      const newEvent = {
        start: date,                // Use the clicked date as the start time
        end: new Date(date.getTime() + (2 * 60 * 60 * 1000)), //sets end time to 2 hours after start
        title: 'New Events, 2 hours by default'          // Default title for the new event
      };
      
      // Push the new event to the events array
      this.events.push(newEvent);

      console.log('New event added:', newEvent);
    },
/*     addHolidayToCalendar (holidayDate) {
      const newEvent = {
        start: holidayDate,
        end: holidayDate,
        title: holiday.name
      }
    }, */
    props: {
      fetchedHolidays: {
        type:Object,
        default : () => [{ holidayDetails: [] }]
      }
    }
  }
}
</script>


<style>

body {
  background-color: #1C2630;
  color: rgb(224, 224, 224)
}
</style>
