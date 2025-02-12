<script>
  import Logo from "./components/Logo.vue";
  import Calendar from "./components/Calendar.vue";



  export default {
    components: {
      Logo,
      Calendar
    }
  };
</script>

<template>
  <Logo msg="Project Vite Calender"/>
    <Calendar/>

</template>
