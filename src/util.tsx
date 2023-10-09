import { Children, ReactElement, useMemo } from 'react'

import { BoxGeometry, MeshBasicMaterial, Shape } from 'three'

import { useFrame } from '@react-three/fiber'

// This assumes that points are located at the second level of the component tree, and with Y is up:
// <group>
//   <group>
//     <mesh name="yo" position={[10, 0, -10]} />

export const extractPoints = (Component: () => ReactElement) => {
  const el = Component()
  const extractedPoints: Record<string, [number, number]> = {}

  const firstLevel = Children.toArray(el.props.children)[0] as ReactElement
  const secondLevel = Children.toArray(firstLevel.props.children)[0] as ReactElement

  Children.forEach(secondLevel.props.children, child => {
    const [x, , z] = child.props.position
    extractedPoints[child.props.name] = [x, -z]
  })

  return extractedPoints
}

export const BasicFlatShape = ({
  vertices,
  color,
  y,
  materialProps = {},
  geometryRef,
  isBasicMaterial,
  ...props
}: {
  vertices: number[][]
  y: number
  color: string
  isBasicMaterial?: boolean
  materialProps?: any
  geometryRef?: any
}) => {
  const shape = useMemo(() => {
    const newShape = new Shape()
    newShape.moveTo(vertices[0][0], vertices[0][1])
    vertices.slice(1).forEach(point => newShape.lineTo(point[0], point[1]))
    newShape.closePath()
    return newShape
  }, [vertices])

  useFrame(() => {
    if (geometryRef?.current?.attributes) {
      const { array } = geometryRef.current.attributes.position
      for (let i = 0; i < array.length; i += 3) {
        // if vertices[2] exists, use it as the z value
        if (vertices[i / 3][2]) {
          array[i + 2] = vertices[i / 3][2]
        }
      }
      geometryRef.current.attributes.position.needsUpdate = true
    }
  })

  return (
    <mesh
      position-y={y}
      receiveShadow
      rotation-x={-Math.PI / 2} // To convert game coordinates to Three coordinates
      {...props}
    >
      <shapeGeometry args={[shape]} ref={geometryRef} />
      {isBasicMaterial ? (
        <meshBasicMaterial color={color} {...materialProps} />
      ) : (
        <meshLambertMaterial color={color} {...materialProps} />
      )}
    </mesh>
  )
}

const cube = new BoxGeometry(1, 1, 1)
const white = new MeshBasicMaterial({ color: 0xffffff })
export const pt = { geometry: cube, material: white }

export const melee = { geometry: cube, material: new MeshBasicMaterial({ color: 0xff0000 }) }
export const ranged = { geometry: cube, material: new MeshBasicMaterial({ color: 0x00ff00 }) }
export const boss = { geometry: cube, material: new MeshBasicMaterial({ color: 0x0000ff }) }
