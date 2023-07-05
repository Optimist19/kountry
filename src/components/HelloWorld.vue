<template>
  <input type="text" v-model="countrySearch" />
  <!-- <div v-for="list in showCountry" :key="list.area">
    <ul>
      <img :src="list.flags.png" alt="" />
      <li>Country: {{ list.name.common }}</li>
      <li>Continent: {{ list.continents[0] }}</li>
      <li>{{ list.area }}</li>
    </ul>
  
  </div> -->
  
  <!-- {{data}} -->

  <div class="hello">
    <router-link
      :to="{ name: 'detailsComp', params: { area: item.area } }"
      v-for="item in data"
      :key="item.area"
    >
      <ul>
        <img :src="item.flags.png" alt="" />
        <li>Country: {{ item.name.common }}</li>
        <!-- <li>: {{ item.area }}</li> -->
        <li>Continent: {{ item.continents[0] }}</li>
      </ul>
    </router-link>
  </div> 
</template>

<script>
import { onMounted, watch, reactive, toRefs, ref, computed } from "vue";
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

    // const showCountry = computed(()=>{
    //   console.log(store.getters.getData, "store");
    //   return store.getters.getData
    // })
    
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
      // ...toRefs(showData),
      countrySearch,

      // showCountry
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
