export const tools = {
  onClick(node) {
    const {type, tagName, properties} = node;
    alert(JSON.stringify({type, tagName}, null, 2));
  },
  navigate(node) {
    const {type, tagName, properties} = node;
    alert(JSON.stringify({type, tagName}, null, 2));
  },
};
