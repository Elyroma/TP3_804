import * as THREE from "./three.module.js";

let geometry = null;
let material = null;

let air = new THREE.Group();
let cloud = new THREE.Group();

material = new THREE.MeshToonMaterial({
    transparent: true,
    opacity: 0.3,
    color: "#ffffff",
    alphaHash: true
});

let planet = new THREE.Mesh(new THREE.SphereGeometry(0.8), material);
planet.add( new THREE.Mesh(new THREE.SphereGeometry(0.7), material));
planet.add( new THREE.Mesh(new THREE.SphereGeometry(0.6), material));
planet.add( new THREE.Mesh(new THREE.SphereGeometry(0.5), material));
planet.add( new THREE.Mesh(new THREE.SphereGeometry(0.4), material));
planet.add( new THREE.Mesh(new THREE.SphereGeometry(0.3), material));
planet.add( new THREE.Mesh(new THREE.SphereGeometry(0.2), material));
planet.add( new THREE.Mesh(new THREE.SphereGeometry(0.1), material));

geometry = new THREE.SphereGeometry(0.1);
material = new THREE.MeshToonMaterial({
    color: "#ffffff",
    alphaHash: true
});

let cloudPart = new THREE.Mesh(geometry, material);
let cloudPart2 = new THREE.Mesh(geometry, material);
let cloudPart3 = new THREE.Mesh(geometry, material);
let cloudPart4 = new THREE.Mesh(geometry, material);

cloudPart2.position.set(0, 0.1, 0);
cloudPart3.position.set(0, 0.05, 0.1);
cloudPart4.position.set(0, 0.05, -0.1);
cloud.add(cloudPart);
cloud.add(cloudPart2);
cloud.add(cloudPart3);
cloud.add(cloudPart4);

let cloud2 = cloud.clone();
let cloud3 = cloud.clone();

//---
cloud.position.set(1, 0, 0.01);
cloud2.position.set(-1.2, 0, -0.3);
cloud3.position.set(-0.6, -0.2, 0.6);

air.add(planet);

export {air, cloud, cloud2, cloud3};