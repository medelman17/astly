export default `
<style>
.red {
  background-color: red;
}
.center {
  display: flex; 
  justify-content: center; 
  align-items: center; 
}
.monospace {
  font-family: Courier;
}
.white {
  color: white; 
}
</style>
<div>
    <h1 >
      HTML, CSS, & React Native
    </h1>
    <div>
    <h2>Enjoy this picture of Chicago</h2>
    <img src="https://www.gannett-cdn.com/presto/2018/10/03/USAT/52c93270-3c36-4539-9bdd-35ba7a5112d5-GettyImages-874734912.jpg" />
    </div>
    <h2>
      Using this css... 
    </h2>
    <p>
    .red {
      background-color: red;
    }
    </p>
    <h2>
      To get this... 
    </h2>
    <div class="red">
      <h3 class="white">Red Box!</h3>
    </div>
    <h2>Now let's use this... </h2>
    <p class="monospace">
    .center {
      display: flex; 
      justify-content: center; 
      align-items: center; 
    }
    </p>
    <h2>
      To center the text... 
    </h2>
    <div class="red center">
      <h3 class="white">Hot Dog!!</h3>
    </div>
    <h2>
      JavaScript / JSX required to make this screen? Zero.
    </h2>
    
    
  </div>
`;
