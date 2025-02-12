<script>
  import Logo from "./components/Logo.vue";
  import Calendar from "./components/Calendar.vue";
  import CitiesList from "./components/CitiesList.vue";
  import HelloWorld from "./components/HelloWorld.vue";


  export default {
    components: {
      Logo,
      Calendar,
      CitiesList,
      HelloWorld
      
    }
  };
</script>

<template>
  <Logo msg="This is dragon calendar"/>
    <Calendar/>
  <CitiesList />
  <!--  <HelloWorld msg="Goodbye Moonmoon!" /> -->
</template>
