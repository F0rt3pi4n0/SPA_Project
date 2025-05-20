<template>
  <nav>
    <router-link to="/">HomePage</router-link> |
    <router-link to="/tableview">Api-Table</router-link> |
    <router-link to="/tablepaginate">Paginacja</router-link> |
    <router-link to="/aboutview">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #5BC0BE;
}

nav a.router-link-exact-active {
  color: #3A506B;
}
</style>
