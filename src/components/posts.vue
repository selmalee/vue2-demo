<template>
    <div id="posts">
        <Menu mode="horizontal" theme="light" :active-name="keyPosts">
            <Menu-item name="/posts/hotest">
                <router-link to="/posts/hotest">最热文章</router-link>
            </Menu-item>
            <Menu-item name="/posts/latest">
                <router-link to="/posts/latest">最新文章</router-link>
            </Menu-item>
        </Menu>
        <router-view></router-view>
    </div>
</template>
<script>
import router from './../router';
export default {
  name: 'posts',
  mounted(){
    this.keyPosts = this.$route.path;
  },
  data(){
    return {
      keyPosts: ''
    }
  }
}
</script>
