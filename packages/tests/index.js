module.exports = `
<style>

$mike: red; 
$luciano: blue;

.red {
  background-color: $mike;
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
@media screen and (min-device-width: 300px) { 
  .red {
    background-color: $luciano
  }
}
</style>
<script>
console.log('nothing happens on native, but this would fire globally on web')
</script>
<div>
    <h1>
      HTML, CSS, & React Native
    </h1>
    <h2>This is just HTML</h2>
    <div>
    <h2>
      Using this css... 
    </h2>
    <p class="monospace">
    $mike: red;
    </p>
    <p class="monospace">
    .red {
      background-color: $mike;
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
    <a href="http://fabulas.io">Link Test</a>
  </div>
`;
