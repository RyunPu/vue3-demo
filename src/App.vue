<template>
  <div id="nav">
    <router-link to="/">Todos</router-link> |
    <router-link to="/posts">Posts</router-link> |
    <router-link to="/images">Images</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
