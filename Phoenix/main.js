// BLOTTER - Example 2
const text = new Blotter.Text("projectPhoenix", {
    family : "'Raleway', sans-serif",
    size : 50,
    fill : "#000",
    paddingLeft : 0,
    paddingRight : 0
  });
  
  const material = new Blotter.ChannelSplitMaterial();
  material.uniforms.uOffset.value = 0.05;
  material.uniforms.uRotation.value = 50;
  material.uniforms.uApplyBlur.value = 1;
  material.uniforms.uAnimateNoise.value = 0.3;

  
  // Try uncommenting the following line to play with
  // the "volatility" of the effect. Higher values here will
  // produce more dramatic changes in the appearance of your
  // text as it animates, but you will likely want to keep
  // the value below 1.0.
  //material.uniforms.uVolatility.value = 0.30;
  
  const blotter = new Blotter(material, {
    texts : text
  });
  
  const elem = document.getElementById("textBox");
  const scope = blotter.forText(text);
  
  scope.appendTo(elem);

document.onmousemove = moveIt;

function moveIt(event) {
    material.uniforms.uRotation.value = (event.clientX * .1);
    material.uniforms.uOffset.value = (event.clientX * 0.0001);
}