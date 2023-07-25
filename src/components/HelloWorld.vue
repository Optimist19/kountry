<template>
  <div class="h1">
    <h1>COUNTRY</h1>
  </div>
  <div>
    <label for="">Search
      <input type="text" v-model="countrySearch" placeholder="Country" />
    </label>
  </div>
  <div class="container">
    <!-- <transition name="my-trans"> -->
      <div class="flags">
        <div class="hello" v-for="item in data"
            :key="item.area">
          <router-link
            :to="{ name: 'detailsComp', params: { area: item.area } }"
          >
          <!-- <div class="short-details"> -->
            <ul>
              <img :src="item.flags.png" alt="item.flags.alt" />
              <li>Country: {{ item.name.common }}</li>
              <!-- <li>: {{ item.area }}</li> -->
              <li>Continent: {{ item.continents[0] }}</li>
            </ul>
          <!-- </div> -->
          </router-link>
        </div>
      </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import { onMounted, watch, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "HelloWorld",

  setup() {
    let store = useStore();
    let data = ref(null);
    let countrySearch = ref("");
    let countryCollection = ref(null);
    
   watch(countrySearch, function(){
    countryCollection.value = data.value.filter(a =>{
      console.log(countrySearch.value)
      return a.name.common.toLowerCase().includes(countrySearch.value.toLowerCase())
    })
   })


    
    async function onLoad () {
      await store.dispatch("getDataActions");
      data.value = store.getters.getData;
      // console.log(data.value, "data");
      // console.log(store.getters.getData, "store");
    }

    

    onMounted(() => {
      onLoad();
    });

    return {
      data,
      countrySearch
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h1{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3vh 0;
}

h1{
  font-size: 26px;
  font-weight: 700;
}

label{
  margin: 0 2vw;
}

input{
  width: 15vw;
  padding-left: 1vw;
  margin: 3vh 0;
}

input::placeholder{
  padding: 2vh 0 2vh 1vw;
}
.container{
  max-width: 100%;
}

.flags{
  display: flex;
  gap: 2vh 4vw;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
}

a{
  color: black;
  text-decoration: none;
}


/* img{
  transition: 1.5 ease-out;
} */

img:hover{
  box-shadow: 2px 2px 2px black;
}

ul{
  list-style: none;
}

@media screen and (max-width: 768px){
  .flags{
    display: flex;
    gap: 2vh 4vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
