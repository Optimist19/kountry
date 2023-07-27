<template>
  <div>
    <div class="balls-con">
      <div class="balls1"></div>
      <div class="balls2"></div>
      <div class="balls3"></div>
      <div class="balls4"></div>
    </div>
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
      <li v-if="isLoading">Loading...</li>
      <li v-else>Coat Of Arm: <img :src="result.coatOfArms.svg" alt="">
      </li>
      <li>
        <a :href="result.maps.googleMaps" target="_blank">Google Map</a>
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
        <label v-for="border in result.borders" :key="border">{{ result.borders }}, </label> 
        <!-- The border has been removed from the api -->
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
    const isLoading = ref(true)

    console.log(navigate);
    console.log(data);

    console.log(data.value);
    console.log(data);

    async function onLoad() {
      await store.dispatch("getDataActions");

      data.value = store.getters.getData;
      isLoading.value = false
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
      result,
      isLoading
    };
  }
};
</script>

<style scoped>
.balls-con{
  position: absolute;
}

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
  transition: all 1s ease-in-out;
}

li:hover{
  transform: translateX(-20px);
}

li:first-child{
  margin-top: 2vh;
}

ul{
  margin-left: 2vw;
}

.balls1{
  height: 40px;
  width: 40px;
  background-color: aquamarine;
  border-radius: 50%;
  position: relative;
  animation-name: balls1;
  animation-duration: 8s;
  animation-iteration-count: infinite;
}


@keyframes balls1 {
  0%{
    top: 0;
    opacity: 0;
  }
  50%{
    opacity: 0.5;
    left: 10vw;
  }
  100%{
    top: 597px;
    opacity: 1;
  }
}

.balls2{
  height: 40px;
  width: 40px;
  background-color: rgb(168, 255, 127);
  border-radius: 50%;
  position: relative;
  animation-name: balls2;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  transition: transform 0.5s ease-in
}

.balls2:hover{
  transform: translateX(200px);
}

@keyframes balls2 {
  0%{
    top: 500px;
    left: 30vw;
    opacity: 1;
  }
  50%{
    top: 250px;
    opacity: 0.5;
    left: 25vw;
  }
  100%{
    top: 0;
    opacity: 0;
    left: 20vw;
  }
}

.balls3{
  height: 80px;
  width: 80px;
  background-color: rgb(255, 146, 127);
  border-radius: 50%;
  position: relative;
  animation-name: balls3;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  transition: transform 0.5s ease-in
}

@keyframes balls3 {
  0%{
    top: 500px;
    left: 45vw;
    opacity: 1;
  }
  50%{
    top: 250px;
    opacity: 0.5;
    left: 65vw;
  }
  100%{
    top: 0;
    opacity: 0;
    left: 85vw;
  }
}
.balls4{
  height: 80px;
  width: 80px;
  background-color: rgb(4, 17, 206);
  border-radius: 50%;
  position: relative;
  animation-name: balls4;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  transition: transform 0.5s ease-in
}

@keyframes balls4 {
  10%{
    top: 500px;
    left: 45vw;
    /* opacity: 1; */
  }
  20%{
    top: 200px;
    left: 20vw;
    /* opacity: 1; */
  }
  30%{
    top: 500px;
    left: 35vw;
    /* opacity: 1; */
  }
  40%{
    bottom: 250px;
    right: 20vw;
    /* opacity: 1; */
  }
  50%{
    top: 0;
    opacity: 0.5;
    left: 30vw;
  }
  60%{
    top: 10vh;
    opacity: 0.2;
    right: 10vw;
  }
  70%{
    bottom: 300px;
    opacity: 0.8;
    left: 55vw;
  }
  80%{
    top: 0;
    opacity: 0;
    left: 45vw;
  }
  90%{
    top: 15vh;
    opacity: 1;
    left: 55vw;
  }
  100%{
    top: 0;
    opacity: 0.5;
    left: 6vw;
  }
}
</style>
