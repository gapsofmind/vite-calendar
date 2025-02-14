  <template>
    <Logo msg="Project Vite Calender"/>
    <Calendar/>
    <Holidays/>
  
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
    }
  };
</script>

