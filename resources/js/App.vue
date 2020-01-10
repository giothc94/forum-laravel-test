<template>
    <div id="app">
        <Header/>
        <router-view></router-view>
    </div>
</template>
<style>
  @import '../../node_modules/bootstrap/dist/css/bootstrap.css';
  @import '../../node_modules/materialize-css/dist/css/materialize.css';
</style>
<script>
import "../../node_modules/materialize-css/dist/js/materialize.js";
import Header from "./components/header.vue";
export default {
  components:{
    Header
  }
}
</script>