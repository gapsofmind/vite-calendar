  <template>
    <Logo msg="Project Vite Calender"/>
    <Calendar/>
    <Holidays/>
    <div>
      <holidays @fetched-holidays="sendHolidaysToData"></holidays> //event listener,methods sends payload to data()
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
        fetchedHolidays: null
      };
    },
    methods: {
      sendHolidaysToData (holidays) {
        this.fetchedHolidays = holidays;
      }
    }
  };
</script>

