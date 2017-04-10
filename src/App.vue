<template>
  <div id="app">
    <Menu mode="horizontal" theme="dark" :active-name="key">
        <Menu-item name="/">
          <router-link to="/" exact><Icon type="ios-paper"></Icon>首页</router-link>
        </Menu-item>
        <Menu-item name="posts">
          <router-link to="/posts/hotest"><Icon type="ios-people"></Icon>文章</router-link>
        </Menu-item>
        <Menu-item name="about">
            <router-link to="/about"><Icon type="settings"></Icon>关于</router-link>
        </Menu-item>
    </Menu>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router';
export default {
  name: 'app',
  mounted(){
    var rootKey = this.$route.path.split('/')[1];
    this.key = rootKey == '' ? '/' : rootKey;
  },
  data(){
    return {
      key: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li a {
  color: inherit;
}
</style>
