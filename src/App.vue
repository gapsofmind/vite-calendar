<template>
  <Logo msg="Project Vite Calender" />

  <div>About Home And so on</div>

  <div>
    <calendar :fetched-holidays="fetchedHolidays"></calendar>
    <holidays @fetched-holidays="storeHolidaysArrayData"></holidays>
    <!-- event listener,methods sends payload to data() -->
  </div>
</template>

<script>
import Logo from "./components/Logo.vue";
import Calendar from "./components/Calendar.vue";
import Holidays from "./components/Holidays.vue";

export default {
  components: {
    Logo,
    Calendar,
    Holidays,
  },
  data() {
    return {
      fetchedHolidays: null,
    };
  },
  methods: {
    storeHolidaysArrayData(holidaysArray) {
      this.fetchedHolidays = holidaysArray;
      console.log("fetch reached App.vue" + this.fetchedHolidays);
    },
  },
};
</script>
