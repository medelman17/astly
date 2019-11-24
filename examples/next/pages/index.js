import React from "react";
import { RenderTree } from "astly";
// const RenderTree = dynamic(() => import("astly").then(mod => mod.RenderTree), {
//   loading: () => <p>Loading caused by client page transition ...</p>
// });

// const Box = dynamic(() => import("astly").then(mod => mod.Box), {
//   loading: () => <p>Loading caused by client page transition ...</p>
// });

const injectJS = `<h5 style="text-align: center;"> Injected h5 </h5>
<div bg="hotpink">
  <p color="white" style="text-align: center;">Module X is Working</p>
</div>
<style>
    .header-middle-nav {
        background-color: hotpink;

    }
    .edelman {
        background-image: url("https://media.giphy.com/media/haZOqHKz9tTfW/giphy.gif");
    }
</style>
`;

const Index = () => {
  return (
    <div>
      <RenderTree tree={injectJS} />
    </div>
  );
};

export default Index;
