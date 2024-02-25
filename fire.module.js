import * as THREE from "./three.module.js";

let geometry = null;
let material = null;

let fire = new THREE.Group();

let mapLava = new THREE.TextureLoader().load( "images/lava.jpeg" );
material = new THREE.MeshPhongMaterial({ map: mapLava });
let planet = new THREE.Mesh(new THREE.SphereGeometry(0.3), material);

geometry = new THREE.CylinderGeometry( 0.06, 0.17, 0.3, 32 );
material = new THREE.MeshPhongMaterial( {
    color: "#220501",
    shininess: 0
} );
let vulcano = new THREE.Mesh( geometry, material );

geometry = new THREE.SphereGeometry(0.05);
material = new THREE.MeshPhongMaterial({
    color: "#f62501",
    specular: "#ffce00",
    emissive: "#6b0900",
    shininess: 10
});

let lava = new THREE.Mesh(geometry, material);
let lava2 = lava.clone();
let lava3 = lava.clone();
let lava4 = lava.clone();
let lava5 = lava.clone();
let lava6 = lava.clone();
let lava7 = lava.clone();

//---
vulcano.add(lava);
vulcano.add(lava2);
vulcano.add(lava3);
vulcano.add(lava4);
vulcano.add(lava5);
vulcano.add(lava6);

lava.position.set(0, 0.33, 0);
lava2.position.set(0.03, 0.12, 0);
lava3.position.set(0.05, 0.1, 0.01);
lava4.position.set(0.05, 0.08, 0.02);
lava5.position.set(0.06, 0.06, 0.04);
lava6.position.set(0.08, 0.04, 0.05);
vulcano.position.set(0,0.2, 0);

lava7.position.set(-0.25, -0.05, 0.09);

fire.add(planet);
fire.add(lava);
fire.add(vulcano);
fire.add(lava7);

export {fire};