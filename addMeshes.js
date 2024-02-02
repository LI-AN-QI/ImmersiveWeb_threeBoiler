import { BoxGeometry, MeshBasicMaterial, MeshStandardMaterial, Mesh } from "three";

export const addBoilerPlateMeshes = () =>{
    const box = new BoxGeometry(1,1,1)
    const boxMaterial = new MeshBasicMaterial({ color: 0xff000 })
    const boxMesh = new Mesh(box,boxMaterial)
    boxMesh.position.set(-2,0,0)
    return boxMesh // return mesh(geometry,material)+position when call this function
}


export const addStandardMesh = () =>{
    const box = new BoxGeometry(2,2,2)
    const boxMaterial = new MeshStandardMaterial({color:0x00ff00})
    const boxMesh = new Mesh(box,boxMaterial)
    boxMesh.position.set(2,0,0)
    return boxMesh
}