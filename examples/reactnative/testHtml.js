export default `
<style>
.red {
  background-color: red;
}
.center {
  display: flex; 
  justify-content: center; 
  alignItems: center; 
}
</style>
<div>
    <h1>
      HTML in React Native
    </h1>
    <div>
        <h2>Buttons are fun</h2>
        <button><span color="white">Primary Button<span></button>
        <button variant="secondary"><span >Secondary Button<span></button>
        <button variant="cautionary"><span>Cautionary Button<span></button>
    </div>
    <div class="red center">
    <h2>Let's try to select this div and make it red</h2>

    </div>
    <div>
      <h2>Vertical Rhythm</h2>
      <p>
        Raclette street art cliche irony next level authentic. Trust fund sartorial
        semiotics 8-bit succulents, air plant tote bag humblebrag. Try-hard
        <strong>chillwave air plant artisan, marfa portland keffiyeh authentic fixie</strong>
        meggings celiac organic craft beer. Tumblr hoodie thundercats 90's, ugh
        hashtag lomo meh.
      </p>
      <h3>Out of the box</h3>
      <p>
        Unicorn PBR&B narwhal af sustainable cliche portland. Meditation tilde
        microdosing, <strike>raclette ugh prism 8-bit</strike> pour-over small batch vegan 90's
        taxidermy affogato unicorn.
      </p>
      <h3>Is Pretty Dope</h3>
      <p>Vape mumblecore hexagon synth scenester banh mi hot chicken chartreuse williamsburg woke cornhole irony tbh. Church-key intelligentsia glossier, edison bulb selfies readymade food truck. Adaptogen viral farm-to-table hoodie unicorn raclette master cleanse narwhal raw denim fixie pickled venmo pinterest cliche locavore. 90's chicharrones hammock PBR&B letterpress locavore, yuccie meh coloring book street art organic ugh jianbing. Tumeric venmo dreamcatcher butcher, etsy microdosing man braid subway tile synth polaroid. Shaman tousled distillery man bun.
      </p>
    </div>
    
    <div>
      <h2>We can also do tables</h2>
      <table>
        <thead>
          <tr>
            <th>Col One Title</th>
            <th>Col Two Title</th>
            <th>Col Three Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>One</td>
            <td>Two</td>
            <td>Three</td>
          </tr>
          <tr>
            <td>Four</td>
            <td>Five</td>
            <td>Six</td>
          </tr>
          <tr>
            <td>Seven</td>
            <td>Eight</td>
            <td>Nine</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h2>Here's the code 👉</h2>
    
      <strong>Here's a pink box with text in it!</strong>
      <div bg="hotpink">
      <p color="white">
        Raclette street art cliche irony next level authentic. Trust fund sartorial
        semiotics 8-bit succulents, air plant tote bag humblebrag. Try-hard
        <strong>chillwave air plant artisan, marfa portland keffiyeh authentic fixie</strong>
        meggings celiac organic craft beer. Tumblr hoodie thundercats 90's, ugh
        hashtag lomo meh.
      </p>
      </div>
    </div>
  </div>
`;
