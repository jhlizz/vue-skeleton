<template>
  <ul>
    <li><a v-link="{ path: '/index' }">精选</a></li>
    <li><a v-link="{ path: '/square' }">广场</a></li>
    <li><a v-link="{ path: '/subscribe' }">订阅</a></li>
    <li><a v-link="{ path: '/hahahahaha' }">我的</a></li>
  </ul>
</template>


<script>
  export default {
    data () {
      return {};
    }
  };
</script>


<style scoped>
  ul {
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  ul > li {
    float: left;
    width: 25%;
    height: 100%;
  }

  a {
    font-size: 35px;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
