<template>
  <div>
    <!-- <li>{{ result }}</li> -->
	<!-- The conditional statement is to check if result truly exists, without the the if statement, the code gives an error of null -->
    <ul v-if="result"> 
      	<li>Name: {{ result.name.common }}</li>
      	<li>Capital: {{ result.capital[0] }}</li>
      	<li>Continent: {{ result.continents[0]}}</li>
		<li>Region: {{ result.region }}</li>
		<li>Subregion: {{ result.subregion }}</li>
		<!-- <li>Languages: {{ result.languages.values }}</li> -->
		<!-- <li v-for="lang in result.languages" :key="lang">
			Language: {{ lang }}
		</li> -->
		<li>Independent: {{ result.independent }}</li>
		<img :src="result.coatOfArms.svg" alt="">
		<a href="result.maps.googleMaps" target="_blank">Google Map</a>
		<li>Population: {{ result.population }}</li>
		<li>Timezones: {{ result.timezones[0] }} </li>
      	
      	<li v-for="currency in result.currencies" :key="currency">
			<span>{{ currency.name }} {{ currency.symbol }}</span>
		</li>
			<!-- <li>Currency Symbol: {{ result.currencies.JOD.symbol }}</li> -->
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "DetailsComp",
  setup() {
    let store = useStore();
    let route = useRoute();
    let navigate = route.params.area;
    let data = ref(null);
    let result = ref(null);

    console.log(navigate);
    console.log(data);

    console.log(data.value);
    console.log(data);

    async function onLoad() {
      await store.dispatch("getDataActions");
      data.value = store.getters.getData;
      result.value = data.value.find((a) => a.area === parseInt(navigate));
      // console.log(data.value, "data");
      // console.log(store.getters.getData, "store");
      // console.log(result.value , "result.value ");
    }

    onMounted(() => {
      onLoad();
    });
    console.log(result.value);
    console.log(typeof result.value);

    return {
      result
    };
  }
};
</script>

<style></style>
