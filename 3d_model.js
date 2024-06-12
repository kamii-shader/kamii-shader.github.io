var all_objects = [];

document.querySelectorAll(".model-viewer").forEach(s =>{
    const scene = new THREE.Scene();
    let object;
    let hint = document.createElement('p');
    hint.setSize = 

    // Tambahkan teks ke elemen p
    hint.innerText = "Swipe or scroll to interact with models";
    hint.style.width = 128;
    hint.style.height = 128;
    // Tambahkan elemen p ke dalam div
    
    const loader = new THREE.GLTFLoader();
    var camera = new THREE.PerspectiveCamera( 45, 1, 0.1, 1000 );
    loader.load(s.getAttribute('model-src'), function (gltf){
        object = gltf.scene;
        object.castShadow = false;
        object.receiveShadow = false;
        object.rotation.y += Math.random() * 180;
        scene.add(object);
        all_objects.push({
            object: object,
            render: renderer,
            scene: scene,
            camera: camera
        });
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('An error happened', error);
    });
    
    let renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(256, 256);
    s.appendChild(renderer.domElement);
    s.appendChild(hint);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);
    camera.position.z = s.getAttribute('zoom');
    
    const controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;
});

var frame_3d = 0;
function animate(){
    requestAnimationFrame(animate);
    all_objects.forEach((data, i) =>{
        if(data.object){
            data.object.rotation.y += 0.005;
            data.object.position.y = Math.sin(frame_3d/ 100 + i) * 0.5 - 0.5;
        }
        data.render.render( data.scene, data.camera );
    })
    frame_3d++;
}
animate();