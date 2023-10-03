import { Children, ReactElement, isValidElement } from 'react'

import { Line } from '@react-three/drei'
import { BoxGeometry, MeshBasicMaterial } from 'three'

const cube = new BoxGeometry(1, 1, 1)
const white = new MeshBasicMaterial({ color: 0xffffff })
const whiteCube = { geometry: cube, material: white }

const extractPoints = (Component: () => ReactElement) => {
  const el = Component()
  const extractedPoints: Record<string, [number, number, number]> = {}

  const traverseChildren = (children: React.ReactNode) => {
    Children.forEach(children, child => {
      if (isValidElement(child)) {
        if (child.props.name === 'points') {
          traverseChildren(child.props.children)
        } else if (child.props.name?.startsWith('p')) {
          const [x, y, z] = child.props.position
          extractedPoints[child.props.name] = [x, y, z]
        }
      }
    })
  }

  traverseChildren(el.props.children)
  return extractedPoints
}

const Obstacles = () => (
  <>
    {/* eslint-disable-next-line no-use-before-define */}
    {obstacles.map(o => (
      <Line key={JSON.stringify(o)} points={o} color="red" lineWidth={5} dashed={false} />
    ))}
  </>
)

const ExtractionExample = () => (
  <>
    <group name="points">
      <mesh name="p1" position={[-3, 0, -1]} {...whiteCube} />
      <mesh name="p2" position={[-3, 0, -3]} {...whiteCube} />
      <mesh name="p3" position={[0, 0, -3]} {...whiteCube} />
      <mesh name="p4" position={[0, 0, -1]} {...whiteCube} />
      <mesh name="p5" position={[2, 0, 0]} {...whiteCube} />
      <mesh name="p6" position={[2, 0, -2]} {...whiteCube} />
      <mesh name="p7" position={[4, 0, -2]} {...whiteCube} />
      <mesh name="p8" position={[4, 0, 0]} {...whiteCube} />
      <Obstacles />
    </group>
  </>
)

export const points: Record<string, [number, number, number]> = extractPoints(ExtractionExample)

const rock1 = [points.p1, points.p2, points.p3, points.p4, points.p1]
const rock2 = [points.p5, points.p6, points.p7, points.p8, points.p5]

export const obstacles = [rock1, rock2]

console.log({ points, obstacles })

export default ExtractionExample
