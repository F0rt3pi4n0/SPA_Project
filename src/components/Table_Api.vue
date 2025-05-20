<template>
    <router-view />
    <div class="col-12">
      <h1 class="ta_h1"> Wyszukaj uniwersytet </h1>
    </div>
  <div class="api-form col-12">
    <div>
      <form method="get">
        <label>Kliknij w przycisk aby wyszukać</label><br>
        <button class="search_button" id="Szukajka_form" type="submit" form="form1" @click="ChangeValue()">Szukaj Kraju</button>
        <button class="search_button" id="Szukajka_form" type="submit" form="form1" @click="ChangeValue1()">Szukaj Nazwy</button>
      </form>
    </div>
  </div>
  <div class="col-12">
    <table id="example_v2">        
      <thead>
         <tr>
           <th>Webpage</th>
           <th>Name</th>
           <th>Domain</th>
         </tr>
       </thead>
       <tbody v-for="item in listItems"
           :key="item.id">
         <tr>
           <td> {{item.web_pages}} </td>
           <td> {{item.name}} </td>
           <td> {{item.domains}} </td>
         </tr>
       </tbody>
    </table> 
  </div>
</template>


<script> 
  
export default {
  data() {
    return {
      currentPath: window.location.hash,
      listItems: [],
      Menu_IF_true:false,
      Submit:'Poland',
      Submit1:'',
      Submit2:''
    }
  },  
  methods: {
  ChangeValue(){
      this.Submit = prompt ('Wpisz frazę');
      //this.Submit = Value
      this.getData()
  },
  ChangeValue1(){
      this.Submit1 = prompt ('Wpisz frazę');
      //this.Submit = Value
      this.getData()
  },
    ShowMenu(){
    this.Menu_IF_true=!this.Menu_IF_true;
   },
    async getData() {
      var URL = "http://universities.hipolabs.com/search?country="+this.Submit+"&name="+this.Submit1;
      const res = await fetch(URL);
      const finalRes = await res.json();
      this.listItems = finalRes;
    }
  },
  
  mounted() {
    this.getData()
  }
}

</script>




<style>
@import url(https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css);
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

.ta_h1 {
  color: #5BC0BE;
}

.search_button {
  padding: 10px;
  margin: 5px;
  border-radius: 15px;
  font-family:Helvetica;
  font-size: 15px;
  font-weight: bold;
  width: 10%;
  border: 0px;
  background-color: #5BC0BE;
  color: #FFFFFF;
}

#example_v2 {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 5px solid #5BC0BE;
  font-family: 'Courier New', Courier, monospace;
  font-size: 17px;
  background-color: #1C2541;
  letter-spacing: 1px;
  color: #ffffff; 
}

#example_v2 td,th {
  padding: 10px;
  border: 2px solid #3A506B;
}

</style>

