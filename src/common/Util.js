const Util = {
    searchAPI(router,searchText){
        if(searchText != ''){
            // this.$router.push(`/search/${this.searchText}`)
             router.push({path:'/search/'+searchText})
        }
    }
}

export default Util;