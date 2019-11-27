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
    <h1 style="font-size: 12px;">
      HTML, CSS, & React Native
    </h1>
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
