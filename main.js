import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMeshes, addStandardMesh } from './addMeshes'
import { addLight } from './addLights'
//add functions from other files

const renderer = new THREE.WebGL1Renderer()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100)//+ camera
const scene = new THREE.Scene()//+ scene
const meshes = {} //+ an empty object "meshes" --- store references to our meshes, store all of our meshes in there
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

    // const geometry = new THREE.BoxGeometry(1,1,1) //+ geometry
    // const material = new THREE.MeshBasicMaterial({color:0xff0000}) //+ material
    // mesh = new THREE.Mesh(geometry,material)//geometry + material->mesh
    camera.position.set(0,0,5)
    // scene.add(mesh)
    resize()
    animate()//call animate
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
    meshes.default.rotation.x += 0.01
    meshes.default.rotation.y -= 0.01

    meshes.standard.rotation.x -= 0.01
    meshes.standard.rotation.y -= 0.01
    // mesh.rotation.x += 0.01
    // mesh.rotation.y += 0.01
    renderer.render(scene,camera)//scene+camera->renderer
}