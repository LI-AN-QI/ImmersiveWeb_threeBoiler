import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMeshes, addStandardMesh } from './addMeshes'
import { addLight } from './addLights'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Model from './Model'

const renderer = new THREE.WebGLRenderer({antialias:true})
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100)
const clock = new THREE.Clock()
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.08
// controls.enablePan = false
// controls.enableZoom = false
const scene = new THREE.Scene()
const meshes = {} 
const mixers = []
const lights = {}
// let mesh

init()//call init

//setup
function init(){
    //set up our renderer default settings, add scene/canvas
    renderer.setSize(window.innerWidth,window.innerHeight)
    document.body.appendChild(renderer.domElement)

    meshes.default = addBoilerPlateMeshes()
    meshes.standard = addStandardMesh()
    lights.default = addLight()

    scene.add(lights.default)
    scene.add(meshes.default)
    scene.add(meshes.standard)

    camera.position.set(0,0,5)
  
    resize()
    animate()
}


function resize(){
    window.addEventListener('resize',()=>{
        renderer.setSize(window.innerWidth,window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })
}

//animation
function animate(){
    requestAnimationFrame(animate)
    const delta = clock.getDelta()
    
    meshes.default.rotation.x += 0.01
    meshes.default.rotation.y -= 0.01

    meshes.standard.rotation.x -= 0.01
    meshes.standard.rotation.y -= 0.01
    // mesh.rotation.x += 0.01
    // mesh.rotation.y += 0.01
    renderer.render(scene,camera)
}