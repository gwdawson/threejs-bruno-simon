const canvas = document.querySelector(".WebGL");

const sizes = {
  width: 800,
  height: 600,
};

// SCENE
// a scene is like a container
// we put objects, models, lights, etc. in it
// at some point we want ask three.js to render the scene
const scene = new THREE.Scene();

// OBJECTS
// objects can be many things
// primitive geometries, imported models, particles, lights, etc.
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// CAMERA
// a camera is not visible
// serves as a point of view when doing a render
// can have multiple and switch between them
// different types
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 3;
scene.add(camera);

// RENDERER
// render a scene from the cameras point of view
// results drawn into a canvas
// three.js will use webgl to render inside the canvas
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
