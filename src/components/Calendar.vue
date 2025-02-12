<!-- I am in vue-cal branch -->
<template>
  <div class="calendar">
    <h1>The year {{ calendar.year }}</h1>
    <div> Now is: {{ calendar.year.months }}</div>
    <div v-for="month in calendar.months" :key="month.month" class="month">
      <h2>Month {{ month.month + 1 }}</h2>
      <div v-for="day in month.days" :key="day.day" class="day">
        Day {{ day.day }} - Weekday: {{ day.weekday }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarComponent',
  data() {
    return {
      calendar: this.createYearStructure(new Date().getFullYear())


    };
  },
  methods: {
    createYearStructure(inputYear) {
      let calendarYear = { year: inputYear, months: [] };
      for (let month = 0; month < 12; month++) {
        let daysInMonth = new Date(inputYear, month + 1, 0).getDate();
        let monthObject = { month, days: [] };
        for (let day = 1; day <= daysInMonth; day++) {
          monthObject.days.push({ day, weekday: new Date(inputYear, month, day).getDay() });
        }
        calendarYear.months.push(monthObject);
      }
      return calendarYear;
    }
  }
};
</script>

<style>
/* styles here */
</style>
