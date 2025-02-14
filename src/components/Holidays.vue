  <template>
      <h1>Holidays</h1>
      <div>Enter year and country code:</div>
      <input v-model="yearForHolidayFetch" placeholder="Year">
      <input v-model="countryCodeFetch" placeholder="Country Code">
      <button @click="fetchHolidays">Fetch Holidays</button>
      <ul>
        <li v-for="holiday in holidays" :key="holiday.date">
          {{ holiday.name }} - {{ holiday.localName }} - {{ holiday.date }}
        </li>
      </ul>
    </template>
    
<script>
  export default {
    data() {
    return {
      holidays: [],
      yearForHolidayFetch: '2025',  // Default  year
      countryCodeFetch: 'SE'        // Default country-code
    };
  },
  methods: {
    fetchHolidays() {
      if (this.yearForHolidayFetch && this.countryCodeFetch) {
        fetch(`https://date.nager.at/api/v3/publicholidays/${this.yearForHolidayFetch}/${this.countryCodeFetch}`)
          .then(response => response.json())
          .then(holidays => {
            this.holidays = holidays;
          })
          .catch(error => console.error('Error fetching holidays:', error));
      }
    }
  },
/*   watch: {
    // Optionally fetch when inputs change, comment out if using button
    yearForHolidayFetch(newVal, oldVal) {
      if (newVal && this.countryCodeFetch) {
        this.fetchHolidays();
      }
    },
    countryCodeFetch(newVal, oldVal) {
      if (newVal && this.yearForHolidayFetch) {
        this.fetchHolidays();
      }
    }
  }, */
  mounted() {
    this.fetchHolidays(); // Initial fetch with default values
  }
};

    

</script>




<style>
li {
  background-color: #3d454d;
  color: white;
  width: 25%
}
</style>
