<template>
  
  <div class="col-12">
      <h1 class="ta_h1"> Projekt na egzamin </h1>
    </div>
    <div class="box">
      <div class="firstDiv col-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada elit in lectus malesuada, sit amet cursus libero gravida. Suspendisse potenti. Nullam faucibus feugiat massa ut hendrerit. Nunc eu interdum magna. Quisque maximus urna sit amet felis ultricies viverra. Mauris ut ipsum sed nunc gravida imperdiet. Nam a orci scelerisque, auctor ex at, ultricies leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas congue velit lectus, eget mattis nunc tempor sed. Maecenas blandit enim sapien, at volutpat ex faucibus vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mollis eu ipsum eget accumsan. Donec est risus, vehicula in pharetra in, suscipit in magna.
      </div>

      <div class="seconDiv col-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada elit in lectus malesuada, sit amet cursus libero gravida. Suspendisse potenti. Nullam faucibus feugiat massa ut hendrerit. Nunc eu interdum magna. Quisque maximus urna sit amet felis ultricies viverra. Mauris ut ipsum sed nunc gravida imperdiet. Nam a orci scelerisque, auctor ex at, ultricies leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas congue velit lectus, eget mattis nunc tempor sed. Maecenas blandit enim sapien, at volutpat ex faucibus vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mollis eu ipsum eget accumsan. Donec est risus, vehicula in pharetra in, suscipit in magna.
      </div>
    </div>    
</template>
<script>
export default {
  name: 'HomePage'
}


</script>


<style>
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
  background-color: #1C2541;
}

.ta_h1 {
  color: #5BC0BE;
}



.firstDiv {
  background-color: #3A506B;
  color: aqua;
  text-align: center;
}


.seconDiv {
  background-color: #3A506B;
  color: rgb(111, 240, 180);
  text-align: center;
}


</style>