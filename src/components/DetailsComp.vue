<template>
  <div>
    <ul v-if="result"> 
      <li>
        <span>Name:</span> {{ result.name.common }}
      </li>
      <li>
        <span>Capital:</span> {{ result.capital[0] }}
      </li>
      <li>
        <span>Official:</span> {{ result.name.official }}
      </li>
      <li>
        <span>Continent:</span> {{ result.continents[0]}}
      </li>
      <li>
        <span>Region:</span> {{ result.region }}
      </li>
      <li>
        <span>Subregion:</span> {{ result.subregion }}
      </li>
      <li for="">
        <span>Languages: </span>
        <label v-for="language in result.languages" :key="language">
          {{ language }},
        </label>
      </li>
      <li>
        <span>Population:</span> {{ result.population }}
      </li>
      <li>
        <span>Car side:</span> {{ result.car.side }}
      </li>
      

      <li>
        <span>Independent:</span> {{ result.independent }}
      </li>
      <li>Coat Of Arm: <img :src="result.coatOfArms.svg" alt="">
      </li>
      <li>
        <a href="result.maps.googleMaps" target="_blank">Google Map</a>
      </li>
      <li>
        <span>Population:</span> {{ result.population }}
      </li>
      <li>
        <span>Timezones:</span> {{ result.timezones[0] }} 
      </li>
          
      <label v-for="currency in result.currencies" :key="currency">
        <li>
          <span>Currency Name:</span> {{ currency.name }}
        </li>
        <li>
          <span>Currency Symbol:</span> {{ currency.symbol }}
        </li>
      </label>

      <li>
        <span>Borders:</span>
        <label v-for="border in result.borders" :key="border">{{ border }}, </label>
      </li>
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

<style scoped>
span{
  color: red;
}
a{
  color: red;
  padding-bottom: 2vh;
}

img, a{
  width: 5vw;
  display: block;
}

li{
  padding-bottom: 2vh;
}

li:first-child{
  margin-top: 2vh;
}

ul{
  margin-left: 2vw;
}
</style>
