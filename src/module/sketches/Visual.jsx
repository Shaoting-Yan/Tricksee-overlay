import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import "./Visual.css";
import * as util from "./util";

function App(props) {
  return (
    <div>
      <div className="u-fill">
        <ReactP5Wrapper 
          sketch={sketch} 
          misc={{}}
        />
      </div>
    </div>
  )
}

function sketch(p5){
  p5.updateWithProps = props => {
  }
  let wrapper = document.getElementById("VisualWindow");
  p5.moveCamera = util.moveCamera.bind(p5);
  p5.moveObject = util.moveObject.bind(p5);
  p5.setup = function(){
    p5.pixelDensity(1);
    p5.vw = wrapper.clientWidth;
    p5.vh = wrapper.clientHeight;
    p5.createCanvas(p5.vw,p5.vh,p5.WEBGL); 
    //view variables
    p5.camHeight = p5.height/2/p5.tan(p5.PI/6);
    //motion parameter
    p5.he = 3;
    p5.sw = 3;
    p5.su = 2;
    p5.da = 10;
  }
  
  p5.draw = function(){
    let rotation = util.getEulerAngles(util.getRotationMatrix(p5.rotationZ,p5.rotationX,p5.rotationY));
    p5.Rz = rotation[0];
    p5.Ry = rotation[2];
    p5.Rx = rotation[1];  
    p5.clear();
    p5.moveCamera();
    p5.moveObject();
    p5.noStroke();
    p5.translate(0,-100,0);
    //mountain svg;
    p5.fill("rgba(0, 0, 0, 0)")
    p5.beginShape();
    p5.vertex(0,0);
    p5.vertex(4224,0);
    p5.vertex(4224,1066);
    p5.vertex(0,1066);
    p5.endShape();
    p5.stroke('rgba(0,0,0,0)')
    p5.strokeCap(p5.PROJECT);
    p5.strokeJoin(p5.MITER);
    p5.fill("#ffffff")
    p5.beginShape();
    p5.vertex(185.2,35.2);
    p5.vertex(0,220.4);
    p5.vertex(0,1066);
    p5.vertex(4224,1066);
    p5.vertex(4224,252.4);
    p5.vertex(4038.8,67.2);
    p5.vertex(3948,158);
    p5.vertex(3790,0);
    p5.vertex(3537.6,252.4);
    p5.vertex(3352.4,67.2);
    p5.vertex(3167.2,252.4);
    p5.vertex(2950,35.2);
    p5.vertex(2796.1,189.1);
    p5.vertex(2724.2,117.2);
    p5.vertex(2589,252.4);
    p5.vertex(2403.8,67.2);
    p5.vertex(2281.9,189.1);
    p5.vertex(2128,35.2);
    p5.vertex(1910.8,252.4);
    p5.vertex(1775.6,117.2);
    p5.vertex(1640.4,252.4);
    p5.vertex(1423.2,35.2);
    p5.vertex(1269.3,189.1);
    p5.vertex(1147.4,67.2);
    p5.vertex(1025.5,189.1);
    p5.vertex(953.6,117.2);
    p5.vertex(818.4,252.4);
    p5.vertex(566,0);
    p5.vertex(408,158);
    p5.vertex(317.2,67.2);
    p5.vertex(267.2,117.2);
    p5.vertex(185.2,35.2);
    p5.endShape();
  }
}

export default App;
