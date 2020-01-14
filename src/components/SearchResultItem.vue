<template>
<div class="search-result-item">
    <a class="search-result-item-link" :href="info.url">
        <div class="title">{{info.title}}</div>
        <div class="url">{{info.url}}</div>
        <div class="desc">{{info.data}}-{{info.desc}}</div>
    </a>
</div>
</template>

<script>
export default {
    props:["info"]
}
</script>

<style lang="less" scoped>
.search-result-item{
    // border:solid 1px red;
    text-align: left;
    padding: 20px;
}
.title{
    color: #198daa;
    font-size: 1.25em;
}
.url{
    color:#006620;
}
.desc{
    color:#545454;
    font-weight: bold;
}
.search-result-item-link{
    text-decoration: none;
}
</style>