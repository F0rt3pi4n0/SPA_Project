<template>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css">
  
    <div class="col-12">
      <h1 class="ta_h1"> Paginacja </h1>
    </div>
          <div id="app">
            <router-view />
        </div>
        <div>
          <table id="example"></table>
        </div>
  </template>


<script> 
var $  = require( 'jquery' );
window.datatables = require('datatables.net-bs');

  var dataSet = [
    ['Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800'],
    ['Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750'],
    ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000'],
    ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060'],
    ['Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700'],
    ['Brielle Williamson', 'Integration Specialist', 'New York', '4804', '2012/12/02', '$372,000'],
    ['Herrod Chandler', 'Sales Assistant', 'San Francisco', '9608', '2012/08/06', '$137,500'],
    ['Rhona Davidson', 'Integration Specialist', 'Tokyo', '6200', '2010/10/14', '$327,900'],
    ['Colleen Hurst', 'Javascript Developer', 'San Francisco', '2360', '2009/09/15', '$205,500'],
    ['Sonya Frost', 'Software Engineer', 'Edinburgh', '1667', '2008/12/13', '$103,600'],
    ['Jena Gaines', 'Office Manager', 'London', '3814', '2008/12/19', '$90,560'],
    ['Quinn Flynn', 'Support Lead', 'Edinburgh', '9497', '2013/03/03', '$342,000'],
    ['Charde Marshall', 'Regional Director', 'San Francisco', '6741', '2008/10/16', '$470,600'],
    ['Haley Kennedy', 'Senior Marketing Designer', 'London', '3597', '2012/12/18', '$313,500'],
    ['Tatyana Fitzpatrick', 'Regional Director', 'London', '1965', '2010/03/17', '$385,750'],
    ['Michael Silva', 'Marketing Designer', 'London', '1581', '2012/11/27', '$198,500'],
    ['Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', '3059', '2010/06/09', '$725,000'],
    ['Gloria Little', 'Systems Administrator', 'New York', '1721', '2009/04/10', '$237,500'],
    ['Bradley Greer', 'Software Engineer', 'London', '2558', '2012/10/13', '$132,000'],
    ['Dai Rios', 'Personnel Lead', 'Edinburgh', '2290', '2012/09/26', '$217,500'],
    ['Jenette Caldwell', 'Development Lead', 'New York', '1937', '2011/09/03', '$345,000'],
    ['Yuri Berry', 'Chief Marketing Officer (CMO)', 'New York', '6154', '2009/06/25', '$675,000'],
    ['Caesar Vance', 'Pre-Sales Support', 'New York', '8330', '2011/12/12', '$106,450'],
    ['Doris Wilder', 'Sales Assistant', 'Sydney', '3023', '2010/09/20', '$85,600'],
    ['Angelica Ramos', 'Chief Executive Officer (CEO)', 'London', '5797', '2009/10/09', '$1,200,000'],
    ['Gavin Joyce', 'Developer', 'Edinburgh', '8822', '2010/12/22', '$92,575'],
    ['Jennifer Chang', 'Regional Director', 'Singapore', '9239', '2010/11/14', '$357,650'],
    ['Brenden Wagner', 'Software Engineer', 'San Francisco', '1314', '2011/06/07', '$206,850'],
    ['Fiona Green', 'Chief Operating Officer (COO)', 'San Francisco', '2947', '2010/03/11', '$850,000'],
    ['Shou Itou', 'Regional Marketing', 'Tokyo', '8899', '2011/08/14', '$163,000'],
    ['Michelle House', 'Integration Specialist', 'Sydney', '2769', '2011/06/02', '$95,400'],
    ['Suki Burks', 'Developer', 'London', '6832', '2009/10/22', '$114,500'],
    ['Prescott Bartlett', 'Technical Author', 'London', '3606', '2011/05/07', '$145,000'],
    ['Gavin Cortez', 'Team Leader', 'San Francisco', '2860', '2008/10/26', '$235,500'],
    ['Martena Mccray', 'Post-Sales support', 'Edinburgh', '8240', '2011/03/09', '$324,050'],
    ['Unity Butler', 'Marketing Designer', 'San Francisco', '5384', '2009/12/09', '$85,675'],
];
$(document).ready(function () {
    $('#example').DataTable({
        data: dataSet,
        columns: [
            { title: 'WebPage' },
            { title: 'State' },
            { title: 'Name' },
            { title: 'Country.' },
            { title: 'Country Code' },
            { title: 'Domains' },
        ],
    });
});

// For this specific table we are going to enable ordering
// (searching is still disabled)
</script>




<style>
@import url(https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.scss);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@media screen and (min-width: 400px) {
  .pasek {
  height: 300px;
  width:30px;
  background-color: rgb(158, 93, 13);
  padding-left: 50px;
  display: block;
  text-align: left;
  float: left;
  }
}
@media screen and (max-width: 400px) {
  .pasek {
  width:0px;
  background-color: bisque;
  float: left;
  }
}

#root {
  max-width: 1200px;
  margin: 0 auto;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin: 1rem;
  border: 1px solid gray;
}

@media screen and (min-width: 600px) {
  .card {
    flex: 1 1 calc(50% - 2rem);
  }
}

@media screen and (min-width: 900px) {
  .card {
    flex: 1 1 calc(33% - 2rem);
  }}

button.page-link {
	display: inline-block;
}
button.page-link {
    font-size: 20px;
    color: #29b3ed;
    font-weight: 500;
}
.offset{
  width: 500px !important;
  margin: 20px auto;  
}

table { 
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

.pagination {
  background-color: #1C2541;
  list-style-type: none;
  padding: 5px;
  text-decoration: none;
}

.pagination a:link {
  color: #ffffff;
  font-style: normal;
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
}

</style>

  