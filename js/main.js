const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Cube
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshPhongMaterial( { color: 0x00ff00, specular: 'blue' } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

// Torus
const ringGeometry = new THREE.TorusGeometry( 1, 0.2, 16, 100 ); 
const ringMaterial = new THREE.MeshPhongMaterial( { color: 0xffff00, specular: 'blue' } ); 
const ring = new THREE.Mesh( ringGeometry, ringMaterial ); 

// Cylinder
const canGeometry = new THREE.CylinderGeometry( 0.5, 0.5, 2, 32 ); 
const canMaterial = new THREE.MeshPhongMaterial( { color: 'blue', specular: 'pink' } ); 
const can = new THREE.Mesh( canGeometry, canMaterial ); 

// Cone
const coneGeometry = new THREE.ConeGeometry( 0.7, 2, 64 ); 
const coneMaterial = new THREE.MeshPhongMaterial( { color: 'red', specular: 'pink' } ); 
const cone = new THREE.Mesh(coneGeometry, coneMaterial );

// Sphere
const sphereGeometry = new THREE.SphereGeometry( 1, 16, 8 ); 
const sphereMaterial = new THREE.MeshPhongMaterial( { color: 'pink', specular: 'yellow' } ); 
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial ); 

scene.add( cube );
scene.add( ring );
scene.add( can );
scene.add( cone );
scene.add( sphere );

var light = new THREE.DirectionalLight('white', 6);
light.position.set(0,5, 5) .normalize();
scene.add(light);

cube.position.x -= 4;
cube.position.y += 2;
cube.position.z += 0.05;

ring.rotation.x += 0.8;
ring.rotation.y += 0.8;

ring.position.x += 3;
ring.position.y += 1.7;
ring.position.z += 0.05;

can.position.x -= 3;
can.position.y -= 2;
can.position.z += 0.05;

cone.position.x += 3;
cone.position.y -= 1.7;
cone.position.z += 0.05;

sphere.position.x -= 0;
sphere.position.y += 0.1;
sphere.position.z += 0.05;

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    ring.rotation.y += 0.1;

    can.rotation.x += 0.02;
    can.rotation.z += 0.05;

    cone.rotation.x -= 0.02;
	renderer.render( scene, camera );
}
animate();

camera.position.z = 5;