import * as THREE from 'three'

const scene = new THREE.Scene()
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xff4500
})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)

console.log(cubeMesh)
console.log(scene)
 
