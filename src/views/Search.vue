<template>
  <div class="search-page">
    <SearchResultToolBar :search="search"/>
    <div v-for='info in searchResultList' :key="info.id">
      <!-- <div>{{info}}</div> -->
      <!-- <div>{{searchResultList}}</div> -->
        <SearchResultItem :info='info'/>
    </div>
  </div>
</template>

<script>
import SearchResultToolBar from "@/components/SearchResultToolBar.vue"
import SearchResultItem from "@/components/SearchResultItem.vue"

import DB from "@/data/search.json";
export default {
  
  data(){
    return {
      searchResultList:[],
      "info":''
    }
  },
  components:{
    SearchResultToolBar,
    SearchResultItem
  },
  computed:{
    search(){
      return this.$route.params.searchText
    }
  },
  created(){
    this.doSearchResult();
  },
  beforeRouteUpdate(to,from,next){
      next()
      this.doSearchResult();
  },
  methods:{
    doSearchResult(){
        const {searchText} = this.$route.params;
        if(DB.hasOwnProperty(searchText)){
          this.searchResultList =DB[searchText]
          console.log(111);
        }else {
          this.searchResultList = []; 
          console.log(222);
        }
        console.log(searchText,this.searchResultList );
    }
  },
  
}
</script>