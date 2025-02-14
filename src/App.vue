<template>
  <div>
    <Logo msg="Project Vite Calendar"/>
    <Calendar :holidays="holidays"/>
    <Holidays @holidays-fetched="updateHolidays"/>
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
    Holidays
  },
  data() {
    return {
      holidays: []
    };
  },
  methods: {
    updateHolidays(newHolidays) {
      this.holidays = newHolidays;
    }
  }
};
</script>

