import * as THREE from "./three.module.js";

let geometry = null;
let material = null;

let wild = new THREE.Group();

let mapGrass = new THREE.TextureLoader().load( "images/grass_6000.jpg" );
material = new THREE.MeshPhongMaterial({ map: mapGrass });
let planet = new THREE.Mesh(new THREE.SphereGeometry(1), material);

let mapTrunk = new THREE.TextureLoader().load( "images/tronc.jpg" );
geometry = new THREE.CylinderGeometry( 0.1, 0.2, 1.5, 32 );
material = new THREE.MeshPhongMaterial( { map: mapTrunk } );
let tree = new THREE.Mesh( geometry, material );

geometry = new THREE.DodecahedronGeometry(0.5, 0);
material = new THREE.MeshPhongMaterial( { color: "#9ed47f" } );
let leaves = new THREE.Mesh( geometry, material );

geometry = new THREE.DodecahedronGeometry(0.3, 0);
material = new THREE.MeshPhongMaterial( { color: "#283520" } );
let bush = new THREE.Mesh( geometry, material );

//---

tree.position.set(0, 1, 0);
tree.add(leaves);
leaves.position.set(0, 1, 0);

let tree2 = tree.clone();
tree2.position.set(0, 0, 1);
tree2.rotateX(1.5);

bush.position.set(0.8, -0.8, 0);

let bush2 = bush.clone();
bush2.position.set(-0.5, 0.9, -0.4);

wild.add(planet);
wild.add(tree);
wild.add(tree2);
wild.add(bush);
wild.add(bush2);

export {wild};