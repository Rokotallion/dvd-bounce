// random number function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// start of Code
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800 );
document.body.appendChild( renderer.domElement );

// plane
const dvdGeometry = new THREE.PlaneGeometry(0.3, 0.3);
const dvdMaterial = new THREE.MeshPhongMaterial( { color: 0x00ff00, side: THREE.DoubleSide } );
const dvd = new THREE.Mesh( dvdGeometry, dvdMaterial );

scene.add( dvd );

var light = new THREE.DirectionalLight('white', 6);
light.position.set(0,5, 5) .normalize();
scene.add(light);

// variables
colCount = 0;

const colorRandom = ["#42f587", "#4254f5", "#4254f5", "#f55742", "#d742f5"];
dvdColor = colorRandom[getRandomInt(5)];
newDvdColor = dvdColor;

const maxXSpeed = [0.0025, -0.0025];
const maxYSpeed = [0.0015, -0.0015];

xSpeed = maxXSpeed[getRandomInt(2)];
ySpeed = maxYSpeed[getRandomInt(2)];;
Rot = 0.02;

if (xSpeed == -0.0025){
    Rot = 0.02;
    console.log("Starts at Left");
}
else if (xSpeed == 0.0025){
    Rot = -0.02;
    console.log("Starts at Right");
}


// initialize properties
dvd.material.color.set(dvdColor);

dvd.rotation.x += 0.1;
dvd.rotation.z += 0.5;

function animate() {
	requestAnimationFrame( animate );
    
    dvd.rotation.y += Rot;
    dvd.rotation.z += Rot;

    dvd.position.x += xSpeed;
    dvd.position.y += ySpeed;

    if (dvd.position.x > 0.95 || dvd.position.y > 0.85 || dvd.position.x < -0.90 || dvd.position.y < -0.90){
        while (dvdColor == newDvdColor){
            dvdColor = colorRandom[getRandomInt(5)];
        }
        newDvdColor = dvdColor;
        dvd.material.color.set(dvdColor);
        colCount ++;
        console.log("Collision Count = " + colCount);
    }

    if (dvd.position.x > 0.95){
        xSpeed = -0.0025
        Rot = -0.02;
        dvd.scale.x -= 0.12;
        dvd.scale.y -= 0.12;
    }
    else if (dvd.position.y > 0.85){
        ySpeed = -0.0015
        Rot = 0.02;
        dvd.scale.x -= 0.12;
        dvd.scale.y -= 0.12;
    }
    else if (dvd.position.x < -0.90){
        xSpeed = 0.0025
        Rot = -0.02;
        dvd.scale.x -= 0.12;
        dvd.scale.y -= 0.12;
    }
    else if (dvd.position.y < -0.90){
        ySpeed = 0.0015
        Rot = 0.02;
        dvd.scale.x -= 0.12;
        dvd.scale.y -= 0.12;
    }
    else if (colCount >= 8){
        xSpeed = 0;
        ySpeed = 0;
        dvd.scale.x = 0;
        dvd.scale.y = 0;
        colCount = 0;
    }

	renderer.render( scene, camera );
}
animate();

camera.position.z = 5;