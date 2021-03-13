<template>
<div class="bgg">
  <div id="app" >
    <div id="nav">
    </div>
    <router-view />
  </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
.bgg{
  background-image: url("https://i.pinimg.com/originals/2d/25/75/2d2575ef486559ed5ad60655ef152c84.jpg")

}
    
</style>