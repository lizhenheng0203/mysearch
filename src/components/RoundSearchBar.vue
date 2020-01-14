<template>
    <div class="round-search-bar">
        <input v-model="search1" class="input-search" @keydown.enter="doSearch">
        <button class="btn-search" @click="doSearch">
            <img class="icon-search" src="./../assets/icon-Search.png">
        </button>
    </div>
</template>

<script>
import Util from "@/common/Util";
export default {
    name:"round-search-bar",
    props:['search'],
    data(){
        return{
            "search1":this.search
        }
    },
    methods:{
        doSearch(){
                Util.searchAPI(this.$router,this.search1);
        }
    }
}
</script>

<style lang="less" scoped>
@import "./../themes/base.less";
.round-search-bar{
    width: 400px;
    position: relative;
    display: inline-block;
    // background-color: aqua
}
.input-search{
    height: 50px;
    border-radius: @rount-search-bar-border-radius;
    border:1px solid wheat;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    font-size: 1.2em;
} 
.btn-search{
    height: @rount-search-bar-height;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border:none;
    margin-right: 15px;
    outline: none;
}
.icon-search{
    width: 30px;
    height: 30px;

}

</style>