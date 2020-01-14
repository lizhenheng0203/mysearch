<template>
  <div class="search-result-toolbar">
      <img class="logo" src="./../assets/search.jpg" @click="goHome">
    <RoundSearchBar :search="search"/>
  </div>
</template>

<script>
import RoundSearchBar from "@/components/RoundSearchBar.vue"
export default {
    name:"search-result-toolbar",
    props:['search'],
    components:{
    RoundSearchBar
  },
  methods:{
      goHome(){
          this.$router.push({path:'/'})
      }
  }
}
</script>

<style lang="less" scoped>
@import "./../themes/base.less";
.search-result-toolbar{
    text-align: left;
    padding:10px; 
    border-bottom: 1px solid wheat;
}
.logo{
    height: 60px;
    vertical-align: middle;
    margin-right: 20px;


}

</style>