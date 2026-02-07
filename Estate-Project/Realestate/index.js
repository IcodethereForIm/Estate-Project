import properties from "./properties/propertyarr.js";
import placeHolderPropObjct from "./properties/default.js";
console.log(properties)

function getProperties(prp=[placeHolderPropObjct]){
    return prp.map(proper=>{
        const {location,price,roomM2,comment,image}=proper
        const totalRoomSize = roomM2.reduce((total,current)=>{
          return total+current},0)
    return    `<section class="Container">
    <img src="./images/${image}">
    <div class="property-card">
        <h2>${location}</h2>
        <h3>${price}</h3>
        <p>${comment}</p>
        <h3>Total size in Square Meter ${totalRoomSize} m&sup2</h3>
        
    
</div>
</section>`
    }).join("")
}

document.getElementById("container").innerHTML = getProperties(properties)

