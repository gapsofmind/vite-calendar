<!-- detta är en template för att rendera en kalender -->
<template>
  <div>
    <a href="SPAindex.html">Go to SPA</a>
  </div>
  <button @click="addHolidayToCalendar">Add Holidays</button>
  <div id="app">
    <vue-cal @cell-click="handleCellClick" :events="events"></vue-cal>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  components: {
    VueCal,
  },
  data() {
    return {
      events: [],
    };
  },
  props: {
    fetchedHolidays: {
      type: Array,
      default: () => [],
    },
  },
  /* debugging */

  watch: {
    // watch changes in fetchedHolidays
    fetchedHolidays(newVal) {
      console.log("Prop updated in Calendar.vue:", newVal);

      // convert fetched holidays into VueCal event format
      this.events = newVal.map((holiday) => ({
        start: new Date(holiday.date), // ensure date properly converted
        end: new Date(holiday.date),
        title: holiday.name,
      }));

      console.log("Events updated in Calendar.vue:", this.events);
    },
  },

  methods: {
    handleCellClick(date) {
      const newEvent = {
        start: date, // use clicked date as start time
        end: new Date(date.getTime() + 2 * 60 * 60 * 1000), //sets end time to 2 hours after start
        title: "New Events, 2 hours by default", // default title for the new event
      };

      // push new event to events array
      this.events.push(newEvent);

      console.log("New event added:", newEvent);
    },
    /*     addHolidayToCalendar (holidayDate) {
      const newEvent = {
        start: holidayDate,
        end: holidayDate,
        title: holiday.name
      }
    }, */
  },
};
</script>

<style>
body {
  background-color: #1c2630;
  color: rgb(224, 224, 224);
}
</style>
