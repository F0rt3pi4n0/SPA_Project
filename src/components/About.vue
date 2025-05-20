<template>
  <h1 class="authors"> Autorzy </h1>
  
    <div class="menu" @click="ShowMenu()">Autorzy</div>
    <div class="col-12 menu">
        <ul class="" v-if="Menu_IF_true">
          <li class="menu2" @click="ShowUserInfo1()">Mateusz Knitter
          <p class="opis_osoby" v-if="User_IF_true">
            Indeks: 57678<br>
            Grupa: INiN5_FD1.2 <br>
            Kierunek: Informatyka<br>
          </p>
          <br>
        </li>
        <br>
          <li class="menu2" @click="ShowUserInfo2()">Kamil Rudolf
          <p class="opis_osoby" v-if="User2_IF_true">
            Indeks: 61638<br>
            Grupa: INiN5_FD1.2 <br>
            Kierunek: Informatyka
          </p>
          <br>
        </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'AboutPage',

    data() {
      return {
        currentPath: window.location.hash,
        listItems: [],
        Menu_IF_true:false,
        User_IF_true:false,
        User2_IF_true:false
      }
    },  
    methods: {
      ShowMenu(){
      this.Menu_IF_true=!this.Menu_IF_true;
     },
     ShowUserInfo1(){
      this.User_IF_true=!this.User_IF_true;
     },
     ShowUserInfo2(){
      this.User2_IF_true=!this.User2_IF_true;
     }
    }
  }

// For this specific table we are going to enable ordering
// (searching is still disabled)
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}

* {
  box-sizing: border-box;
}

[class*="col-"] {
  float: left;
  padding: 15px;
  /* border: 1px solid red; */
}

/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}

body {
  background-color: #0B132B;
}

.authors {
  text-align: center;
  color: #5BC0BE;
}

.menu {
  text-align: center;
  list-style-type: none;
  background-color: #5BC0BE;
  font-size: larger;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.menu2 {
  align:center;
  text-align: center;
  list-style-type: none;
  background-color: #5cdad7;
  font-size: larger;
  width:400px;
  margin-left: 35%;
}

.menu li { 
  display: block;
}
.opis_osoby {
  text-align: Left;
  background-color: #79e9e7;
  margin-left: 20%;
  margin-right: 20%;
}



</style>