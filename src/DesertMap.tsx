import { Line } from '@react-three/drei'

import { BasicFlatShape, boss, extractPoints, melee, pt, ranged } from './util'

/* eslint-disable no-use-before-define */
const Visuals = () => (
  <>
    <group position-y={0.3}>
      {mountains.map(m => (
        <BasicFlatShape key={JSON.stringify(m)} vertices={m} y={0} color="#444" />
      ))}
      {forests.map(f => (
        <BasicFlatShape key={JSON.stringify(f)} vertices={f} y={0} color="#160" />
      ))}
      {grasses.map(g => (
        <BasicFlatShape key={JSON.stringify(g)} vertices={g} y={0} color="#180" />
      ))}
      {rivers.map(r => (
        <BasicFlatShape key={JSON.stringify(r)} vertices={r} y={0} color="#009" />
      ))}
      {redGrounds.map(r => (
        <BasicFlatShape key={JSON.stringify(r)} vertices={r} y={0} color="#953" />
      ))}
      {bridges.map(b => (
        <BasicFlatShape key={JSON.stringify(b)} vertices={b} y={0} color="#742" />
      ))}
      {foams.map(f => (
        <BasicFlatShape key={JSON.stringify(f)} vertices={f} y={0} color="#bbb" />
      ))}
      {sands.map(s => (
        <BasicFlatShape key={JSON.stringify(s)} vertices={s} y={0} color="#cb0" />
      ))}
      {stones.map(s => (
        <BasicFlatShape key={JSON.stringify(s)} vertices={s} y={0} color="#999" />
      ))}
      {canyons.map(c => (
        <BasicFlatShape key={JSON.stringify(c)} vertices={c} y={0} color="#a52" />
      ))}
      {obstacles.map(o => (
        <Line
          key={JSON.stringify(o)}
          points={o.map(p => [p[0], 0, -p[1]])}
          color="#f00"
          lineWidth={5}
        />
      ))}
      <Line points={contour.map(p => [p[0], 0, -p[1]])} color="#f00" lineWidth={5} />
    </group>
    <ambientLight intensity={4} />
  </>
)
/* eslint-enable no-use-before-define */

const DesertMapSchema = () => (
  <>
    <group position={[-50, 0, 50]}>
      <group name="points">
        <mesh name="mountain01" position={[0, 0, 0]} {...pt} />
        <mesh name="mountain02" position={[0, 0, -100]} {...pt} />
        <mesh name="mountain03" position={[9.2, 0, -92.6]} {...pt} />
        <mesh name="mountain04" position={[12.2, 0, -75.3]} {...pt} />
        <mesh name="mountain05" position={[11.6, 0, -67.8]} {...pt} />
        <mesh name="mountain06" position={[9.9, 0, -60.1]} {...pt} />
        <mesh name="mountain07" position={[9.9, 0, -49.2]} {...pt} />
        <mesh name="mountain08" position={[11.1, 0, -42.7]} {...pt} />
        <mesh name="mountain09" position={[13.9, 0, -32.4]} {...pt} />
        <mesh name="mountain10" position={[11.3, 0, -22.4]} {...pt} />
        <mesh name="mountain11" position={[10.4, 0, -13.6]} {...pt} />
        <mesh name="mountain11p3" position={[15.3, 0, -9.0]} {...pt} />
        <mesh name="mountain11p6" position={[21.4, 0, -10.2]} {...pt} />
        <mesh name="mountain12" position={[24.9, 0, -15.4]} {...pt} />
        <mesh name="mountain13" position={[23.3, 0, -24.5]} {...pt} />
        <mesh name="mountain14" position={[19.8, 0, -32.3]} {...pt} />
        <mesh name="mountain15" position={[22.4, 0, -34.9]} {...pt} />
        <mesh name="mountain16" position={[28.6, 0, -26.7]} {...pt} />
        <mesh name="mountain17" position={[30.2, 0, -19.5]} {...pt} />
        <mesh name="mountain18" position={[32.6, 0, -11.9]} {...pt} />
        <mesh name="mountain19" position={[51.2, 0, -5.9]} {...pt} />
        <mesh name="mountain20" position={[57.4, 0, 0]} {...pt} />
        <mesh name="forest01" position={[100, 0, -100]} {...pt} />
        <mesh name="forest02" position={[100, 0, -41.2]} {...pt} />
        <mesh name="forest03" position={[88.2, 0, -42.5]} {...pt} />
        <mesh name="forest04" position={[85.7, 0, -49.3]} {...pt} />
        <mesh name="forest05" position={[81.1, 0, -49.7]} {...pt} />
        <mesh name="forest06" position={[80.8, 0, -52.6]} {...pt} />
        <mesh name="forest07" position={[86.9, 0, -55.7]} {...pt} />
        <mesh name="forest08" position={[86.0, 0, -64.3]} {...pt} />
        <mesh name="forest09" position={[87.6, 0, -72.4]} {...pt} />
        <mesh name="forest10" position={[90.1, 0, -80.6]} {...pt} />
        <mesh name="forest10p3" position={[85.6, 0, -88.3]} {...pt} />
        <mesh name="forest10p6" position={[76.5, 0, -89.4]} {...pt} />
        <mesh name="forest11" position={[68.1, 0, -85.8]} {...pt} />
        <mesh name="forest12" position={[67.0, 0, -78.0]} {...pt} />
        <mesh name="forest13" position={[70.7, 0, -68.0]} {...pt} />
        <mesh name="forest14" position={[72.2, 0, -55.0]} {...pt} />
        <mesh name="forest15" position={[75.6, 0, -53.3]} {...pt} />
        <mesh name="forest16" position={[74.9, 0, -50.0]} {...pt} />
        <mesh name="forest16p5" position={[70.6, 0, -49.6]} {...pt} />
        <mesh name="forest17" position={[64.9, 0, -51.0]} {...pt} />
        <mesh name="forest18" position={[63.8, 0, -56.5]} {...pt} />
        <mesh name="forest19" position={[66.2, 0, -61.4]} {...pt} />
        <mesh name="forest20" position={[65.2, 0, -68.5]} {...pt} />
        <mesh name="forest21" position={[62.9, 0, -73.6]} {...pt} />
        <mesh name="forest22" position={[57.8, 0, -74.6]} {...pt} />
        <mesh name="forest23" position={[54.8, 0, -72.5]} {...pt} />
        <mesh name="forest24" position={[54.3, 0, -68.6]} {...pt} />
        <mesh name="forest25" position={[51.5, 0, -66.8]} {...pt} />
        <mesh name="forest26" position={[50.9, 0, -72.3]} {...pt} />
        <mesh name="forest27" position={[48.4, 0, -77.7]} {...pt} />
        <mesh name="forest28" position={[53.9, 0, -80.1]} {...pt} />
        <mesh name="forest29" position={[56.9, 0, -84.6]} {...pt} />
        <mesh name="forest29p5" position={[56.9, 0, -89.1]} {...pt} />
        <mesh name="forest30" position={[56.7, 0, -100]} {...pt} />
        <mesh name="river01" position={[20, 0, -100]} {...pt} />
        <mesh name="river02" position={[25.2, 0, -100]} {...pt} />
        <mesh name="river03" position={[25.5, 0, -90.5]} {...pt} />
        <mesh name="river04" position={[26.4, 0, -85.7]} {...pt} />
        <mesh name="river05" position={[22.3, 0, -84.8]} {...pt} />
        <mesh name="river06" position={[20.6, 0, -89.9]} {...pt} />
        <mesh name="river08" position={[27.8, 0, -82.1]} {...pt} />
        <mesh name="river09" position={[31.5, 0, -78.2]} {...pt} />
        <mesh name="river10" position={[39.6, 0, -79.9]} {...pt} />
        <mesh name="river11" position={[47.9, 0, -66.6]} {...pt} />
        <mesh name="river12" position={[45.6, 0, -73.1]} {...pt} />
        <mesh name="river13" position={[43.1, 0, -75.3]} {...pt} />
        <mesh name="river14" position={[38.2, 0, -75.4]} {...pt} />
        <mesh name="river15" position={[30.9, 0, -73.8]} {...pt} />
        <mesh name="river16" position={[26.0, 0, -76.3]} {...pt} />
        <mesh name="river17" position={[23.6, 0, -80.7]} {...pt} />
        <mesh name="river18" position={[58.1, 0, -53.5]} {...pt} />
        <mesh name="river19" position={[60.3, 0, -50.5]} {...pt} />
        <mesh name="river20" position={[66.7, 0, -47.6]} {...pt} />
        <mesh name="river21" position={[72.1, 0, -44.1]} {...pt} />
        <mesh name="river22" position={[69.5, 0, -40.5]} {...pt} />
        <mesh name="river23" position={[65.9, 0, -43.5]} {...pt} />
        <mesh name="river24" position={[60.3, 0, -45.2]} {...pt} />
        <mesh name="river25" position={[54.9, 0, -47.9]} {...pt} />
        <mesh name="river26" position={[75.4, 0, -42.4]} {...pt} />
        <mesh name="river27" position={[80.5, 0, -41.7]} {...pt} />
        <mesh name="river28" position={[100, 0, -35.0]} {...pt} />
        <mesh name="river29" position={[90.4, 0, -38.5]} {...pt} />
        <mesh name="river30" position={[84.1, 0, -37.8]} {...pt} />
        <mesh name="river31" position={[78.2, 0, -37.4]} {...pt} />
        <mesh name="river32" position={[73.2, 0, -38.7]} {...pt} />
        <mesh name="pier01" position={[56.7, 0, -60.8]} {...pt} />
        <mesh name="pier02" position={[58.49, 0, -61.46]} {...pt} />
        <mesh name="pier03" position={[59.73, 0, -57.8]} {...pt} />
        <mesh name="pier04" position={[57.9, 0, -57.1]} {...pt} />
        <mesh name="pier05" position={[55.1, 0, -56.1]} {...pt} />
        <mesh name="pier06" position={[53.6, 0, -59.6]} {...pt} />
        <mesh name="oasis01" position={[43.2, 0, -63.0]} {...pt} />
        <mesh name="oasis02" position={[40.8, 0, -57.3]} {...pt} />
        <mesh name="oasis03" position={[41.1, 0, -50.7]} {...pt} />
        <mesh name="oasis04" position={[44.8, 0, -46.5]} {...pt} />
        <mesh name="oasis05" position={[50.4, 0, -45.6]} {...pt} />
        <mesh name="oasis06" position={[54.9, 0, -64.1]} {...pt} />
        <mesh name="stone01" position={[18.5, 0, -54.9]} {...pt} />
        <mesh name="stone02" position={[18.5, 0, -50.4]} {...pt} />
        <mesh name="stone03" position={[21.0, 0, -46.1]} {...pt} />
        <mesh name="stone04" position={[26.3, 0, -41.6]} {...pt} />
        <mesh name="stone05" position={[31.6, 0, -36.2]} {...pt} />
        <mesh name="stone06" position={[26.7, 0, -31.2]} {...pt} />
        <mesh name="stone07" position={[11.4, 0, -55.0]} {...pt} />
        <mesh name="canyon01" position={[14.4, 0, -91.0]} {...pt} />
        <mesh name="canyon02" position={[9.9, 0, -88.0]} {...pt} />
        <mesh name="canyon03" position={[46.9, 0, -90.5]} {...pt} />
        <mesh name="canyon04" position={[38.6, 0, -88.2]} {...pt} />
        <mesh name="canyon05" position={[30.1, 0, -90.7]} {...pt} />
        <mesh name="canyon06" position={[100, 0, 0]} {...pt} />
        <mesh name="canyon07" position={[42.1, 0, -9.2]} {...pt} />
        <mesh name="canyon08" position={[54.2, 0, -10.7]} {...pt} />
        <mesh name="canyon09" position={[63.6, 0, -11.1]} {...pt} />
        <mesh name="canyon10" position={[73.6, 0, -8.3]} {...pt} />
        <mesh name="canyon11" position={[82.3, 0, -7.4]} {...pt} />
        <mesh name="canyon12" position={[89.6, 0, -8.8]} {...pt} />
        <mesh name="canyon13" position={[90.5, 0, -16.2]} {...pt} />
        <mesh name="canyon14" position={[87.4, 0, -21.7]} {...pt} />
        <mesh name="canyon15" position={[79.9, 0, -23.7]} {...pt} />
        <mesh name="canyon16" position={[67.5, 0, -23.2]} {...pt} />
        <mesh name="canyon17" position={[56.5, 0, -24.5]} {...pt} />
        <mesh name="canyon18" position={[51.8, 0, -18.9]} {...pt} />
        <mesh name="canyon19" position={[42.5, 0, -16.8]} {...pt} />
        <mesh name="canyon20" position={[36.4, 0, -21.4]} {...pt} />
        <mesh name="canyon21" position={[35.1, 0, -27.0]} {...pt} />
        <mesh name="canyon22" position={[39.6, 0, -25.4]} {...pt} />
        <mesh name="canyon23" position={[42.5, 0, -21.9]} {...pt} />
        <mesh name="canyon24" position={[47.9, 0, -22.3]} {...pt} />
        <mesh name="canyon25" position={[50.2, 0, -26.6]} {...pt} />
        <mesh name="canyon26" position={[43.6, 0, -29.6]} {...pt} />
        <mesh name="canyon27" position={[37.4, 0, -32.5]} {...pt} />
        <mesh name="canyon28" position={[18.5, 0, -60.6]} {...pt} />
        <mesh name="canyon29" position={[20.9, 0, -65.2]} {...pt} />
        <mesh name="canyon30" position={[25.2, 0, -68.1]} {...pt} />
        <mesh name="canyon31" position={[27.8, 0, -65.9]} {...pt} />
        <mesh name="canyon32" position={[26.0, 0, -63.0]} {...pt} />
        <mesh name="canyon33" position={[23.5, 0, -57.9]} {...pt} />
        <mesh name="canyon34" position={[23.6, 0, -52.9]} {...pt} />
        <mesh name="canyon34p2" position={[26.2, 0, -47.9]} {...pt} />
        <mesh name="canyon34p4" position={[30.8, 0, -43.1]} {...pt} />
        <mesh name="canyon34p6" position={[36.3, 0, -38.5]} {...pt} />
        <mesh name="canyon34p8" position={[41.7, 0, -35.3]} {...pt} />
        <mesh name="canyon35" position={[49.1, 0, -32.1]} {...pt} />
        <mesh name="canyon36" position={[57.3, 0, -30.1]} {...pt} />
        <mesh name="canyon36p2" position={[58.2, 0, -33.5]} {...pt} />
        <mesh name="canyon36p4" position={[61.1, 0, -37.3]} {...pt} />
        <mesh name="canyon36p6" position={[63.2, 0, -35.4]} {...pt} />
        <mesh name="canyon36p8" position={[62.1, 0, -31.7]} {...pt} />
        <mesh name="canyon36p9" position={[64.4, 0, -28.7]} {...pt} />
        <mesh name="canyon37" position={[69.8, 0, -27.1]} {...pt} />
        <mesh name="canyon38" position={[77.1, 0, -26.8]} {...pt} />
        <mesh name="canyon39" position={[83.9, 0, -27.6]} {...pt} />
        <mesh name="canyon40" position={[88.6, 0, -29.8]} {...pt} />
        <mesh name="canyon41" position={[90.9, 0, -34.9]} {...pt} />
        <mesh name="canyon42" position={[58.5, 0, -17.9]} {...pt} />
        <mesh name="canyon43" position={[61.3, 0, -20.9]} {...pt} />
        <mesh name="canyon44" position={[65.7, 0, -19.9]} {...pt} />
        <mesh name="canyon45" position={[63.7, 0, -16.5]} {...pt} />
        <mesh name="canyon46" position={[77.2, 0, -21.3]} {...pt} />
        <mesh name="canyon47" position={[81.5, 0, -20.4]} {...pt} />
        <mesh name="canyon48" position={[83.3, 0, -16.9]} {...pt} />
        <mesh name="canyon49" position={[77.7, 0, -16.1]} {...pt} />
        <mesh name="canyon50" position={[73.5, 0, -18.2]} {...pt} />
        <mesh name="oasisGrass01" position={[47.2, 0, -69.9]} {...pt} />
        <mesh name="oasisGrass02" position={[41.6, 0, -66.3]} {...pt} />
        <mesh name="oasisGrass03" position={[37.7, 0, -60.3]} {...pt} />
        <mesh name="oasisGrass04" position={[37.2, 0, -53.3]} {...pt} />
        <mesh name="oasisGrass05" position={[39.6, 0, -47.2]} {...pt} />
        <mesh name="oasisGrass06" position={[43.9, 0, -43.9]} {...pt} />
        <mesh name="oasisGrass07" position={[50.0, 0, -42.8]} {...pt} />
        <mesh name="oasisGrass08" position={[54.4, 0, -44.3]} {...pt} />
        <mesh name="oasisGrass09" position={[57.3, 0, -46.2]} {...pt} />
        <mesh name="foam01" position={[51.2, 0, -66.0]} {...pt} />
        <mesh name="foam02" position={[48.3, 0, -65.9]} {...pt} />
        <mesh name="foam03" position={[58.4, 0, -52.1]} {...pt} />
        <mesh name="foam04" position={[56.1, 0, -47.8]} {...pt} />
        <mesh name="melee01" position={[69.5, 0, -18.8]} {...melee} />
        <mesh name="melee02" position={[37.0, 0, -13.2]} {...melee} />
        <mesh name="melee03" position={[40.0, 0, -12.0]} {...melee} />
        <mesh name="melee04" position={[46.3, 0, -26.3]} {...melee} />
        <mesh name="melee05" position={[12.7, 0, -48.3]} {...melee} />
        <mesh name="melee06" position={[13.0, 0, -44.9]} {...melee} />
        <mesh name="melee07" position={[15.2, 0, -87.6]} {...melee} />
        <mesh name="melee08" position={[48.6, 0, -87.8]} {...melee} />
        <mesh name="melee09" position={[49.5, 0, -83.7]} {...melee} />
        <mesh name="melee10" position={[42.4, 0, -72.8]} {...melee} />
        <mesh name="melee11" position={[26.4, 0, -54.7]} {...melee} />
        <mesh name="melee12" position={[27.9, 0, -51.4]} {...melee} />
        <mesh name="melee13" position={[55.9, 0, -33.7]} {...melee} />
        <mesh name="melee14" position={[57.9, 0, -70.9]} {...melee} />
        <mesh name="melee15" position={[60.7, 0, -70.9]} {...melee} />
        <mesh name="melee16" position={[83.4, 0, -30.4]} {...melee} />
        <mesh name="melee17" position={[84.2, 0, -74.4]} {...melee} />
        <mesh name="melee18" position={[81.6, 0, -75.6]} {...melee} />
        <mesh name="melee19" position={[72.2, 0, -74.5]} {...melee} />
        <mesh name="melee20" position={[15.5, 0, -27.9]} {...melee} />
        <mesh name="melee21" position={[18.4, 0, -28.0]} {...melee} />
        <mesh name="melee22" position={[74.8, 0, -75.4]} {...melee} />
        <mesh name="ranged01" position={[14.5, 0, -16.1]} {...ranged} />
        <mesh name="ranged02" position={[56.7, 0, -20.2]} {...ranged} />
        <mesh name="ranged03" position={[19.4, 0, -16.0]} {...ranged} />
        <mesh name="ranged04" position={[50.9, 0, -86.3]} {...ranged} />
        <mesh name="ranged05" position={[76.2, 0, -55.9]} {...ranged} />
        <mesh name="ranged06" position={[81.3, 0, -55.9]} {...ranged} />
        <mesh name="ranged07" position={[74.5, 0, -57.1]} {...ranged} />
        <mesh name="ranged08" position={[83.5, 0, -57.4]} {...ranged} />
        <mesh name="ranged09" position={[86.9, 0, -34.1]} {...ranged} />
        <mesh name="ranged10" position={[56.9, 0, -44.2]} {...ranged} />
        <mesh name="ranged11" position={[43.9, 0, -70.3]} {...ranged} />
        <mesh name="ranged12" position={[44.0, 0, -24.9]} {...ranged} />
        <mesh name="ranged13" position={[56.6, 0, -58.9]} {...ranged} />
        <mesh name="ranged14" position={[59.0, 0, -44.0]} {...ranged} />
        <mesh name="ranged16" position={[73.2, 0, -76.7]} {...ranged} />
        <mesh name="ranged17" position={[83.5, 0, -76.5]} {...ranged} />
        <mesh name="boss01" position={[17.1, 0, -13.9]} {...boss} />
        <mesh name="boss02" position={[75.3, 0, -84.5]} {...boss} />
        <mesh name="boss03" position={[79.6, 0, -84.7]} {...boss} />
        <mesh name="boss04" position={[53.4, 0, -86.4]} {...boss} />
        <mesh name="boss06" position={[85.4, 0, -32.2]} {...boss} />
        <mesh name="enemyPortal01" position={[46.1, 0, -24.5]} {...pt} />
        <mesh name="enemyPortal02" position={[81.2, 0, -29.5]} {...pt} />
        <mesh name="enemyPortal03" position={[26.1, 0, -52.7]} {...pt} />
        <mesh name="enemyPortal04" position={[77.4, 0, -86.3]} {...pt} />
        <mesh name="portal01" position={[85.8, 0, -11.4]} {...pt} />
        <mesh name="spawn01" position={[82.3, 0, -12.7]} {...pt} />
      </group>
      <Visuals />
    </group>
    {/* <mesh scale={[100, 100, 1]} rotation-x={-Math.PI / 2}>
      <planeGeometry />
      <meshBasicMaterial color={0x666666} />
    </mesh> */}
  </>
)

export const p: Record<string, [number, number]> = extractPoints(DesertMapSchema)

// ===== 🟩 GRASS 🟩 ======

const grass1 = [
  p.forest11,
  p.forest10p6,
  p.forest10p3,
  p.forest10,
  p.forest09,
  p.forest08,
  p.forest07,
  p.forest06,
  p.forest05,
  p.forest04,
  p.forest03,
  p.river27,
  p.river26,
  p.river21,
  p.river20,
  p.forest17,
  p.forest16p5,
  p.forest16,
  p.forest15,
  p.forest14,
  p.forest13,
  p.forest12,
]

const oasisGrass = [
  p.oasisGrass01,
  p.oasisGrass02,
  p.oasisGrass03,
  p.oasisGrass04,
  p.oasisGrass05,
  p.oasisGrass06,
  p.oasisGrass07,
  p.oasisGrass08,
  p.oasisGrass09,
  p.river25,
  p.oasis05,
  p.oasis04,
  p.oasis03,
  p.oasis02,
  p.oasis01,
  p.river11,
]

const grasses = [grass1, oasisGrass]

// ===== 🗻 MOUNTAINS 🗻 ======

const mountain1 = [
  p.mountain01,
  p.mountain02,
  p.mountain03,
  p.mountain04,
  p.mountain05,
  p.mountain06,
  p.stone07,
  p.mountain07,
  p.mountain08,
  p.mountain09,
  p.mountain10,
  p.mountain11,
  p.mountain11p3,
  p.mountain11p6,
  p.mountain12,
  p.mountain13,
  p.mountain14,
  p.mountain15,
  p.stone06,
  p.mountain16,
  p.mountain17,
  p.mountain18,
  p.canyon07,
  p.mountain19,
  p.mountain20,
]

const mountains = [mountain1]

// ===== 🌳 FORESTS 🌳 ======

const forest1 = [
  p.forest01,
  p.forest02,
  p.forest03,
  p.forest04,
  p.forest05,
  p.forest06,
  p.forest07,
  p.forest08,
  p.forest09,
  p.forest10,
  p.forest10p3,
  p.forest10p6,
  p.forest11,
  p.forest12,
  p.forest13,
  p.forest14,
  p.forest15,
  p.forest16,
  p.forest16p5,
  p.forest17,
  p.forest18,
  p.forest19,
  p.forest20,
  p.forest21,
  p.forest22,
  p.forest23,
  p.forest24,
  p.forest25,
  p.forest26,
  p.forest27,
  p.forest28,
  p.forest29,
  p.forest29p5,
  p.forest30,
]

const forests = [forest1]

// ===== 🟫 RED GROUND 🟫 ======

const redGround1 = [
  p.stone07,
  p.stone01,
  p.stone02,
  p.stone03,
  p.stone04,
  p.stone05,
  p.canyon27,
  p.canyon26,
  p.canyon25,
  p.canyon24,
  p.canyon23,
  p.canyon22,
  p.canyon21,
  p.canyon20,
  p.canyon19,
  p.canyon18,
  p.canyon17,
  p.canyon16,
  p.canyon15, // cut
  p.canyon47,
  p.canyon46,
  p.canyon50,
  p.canyon49,
  p.canyon48,
  p.canyon47, // end of cut
  p.canyon15,
  p.canyon14,
  p.canyon13,
  p.canyon12,
  p.canyon11,
  p.canyon10,
  p.canyon09, // cut
  p.canyon45,
  p.canyon44,
  p.canyon43,
  p.canyon42,
  p.canyon45,
  p.canyon09, // end of cut
  p.canyon08,
  p.canyon07,
  p.mountain18,
  p.mountain17,
  p.mountain16,
  p.stone06,
  p.mountain15,
  p.mountain14,
  p.mountain09,
  p.mountain08,
  p.mountain07,
]

const redGrounds = [redGround1]

// ===== 🌊 RIVERS 🌊 ======

const river1 = [p.river01, p.river02, p.river03, p.river04, p.river05, p.river06]
const river2 = [
  p.river08,
  p.river09,
  p.river10,
  p.forest27,
  p.forest26,
  p.forest25,
  p.river11,
  p.oasisGrass01,
  p.river12,
  p.river13,
  p.river14,
  p.river15,
  p.river16,
  p.river17,
]

const river3 = [
  p.river18,
  p.river19,
  p.river20,
  p.river21,
  p.river22,
  p.river23,
  p.river24,
  p.oasisGrass09,
  p.river25,
]

const river4 = [
  p.river26,
  p.river27,
  p.forest03,
  p.forest02,
  p.river28,
  p.river29,
  p.river30,
  p.river31,
  p.river32,
]

const rivers = [river1, river2, river3, river4]

// ===== 💨 FOAMS 💨 ======

const foam1 = [p.river11, p.forest25, p.foam01, p.foam02]
const foam2 = [p.river18, p.foam03, p.foam04, p.river25]

const foams = [foam1, foam2]

// ===== 🏖️ SANDS 🏖️ ======

const sand1 = [
  p.forest23,
  p.forest22,
  p.forest21,
  p.forest20,
  p.forest19,
  p.forest18,
  p.forest17,
  p.river20,
  p.river19,
  p.river18,
  p.pier04,
  p.pier03,
  p.pier02,
  p.pier01,
  p.oasis06,
  p.forest25,
  p.forest24,
]

const sand2 = [
  p.canyon02,
  p.canyon01,
  p.river06,
  p.river05,
  p.river17,
  p.river16,
  p.river15,
  p.river14,
  p.river13,
  p.river12,
  p.oasisGrass01,
  p.oasisGrass02,
  p.oasisGrass03,
  p.oasisGrass04,
  p.oasisGrass05,
  p.oasisGrass06,
  p.oasisGrass07,
  p.oasisGrass08,
  p.oasisGrass09,
  p.river24,
  p.river23,
  p.river22,
  p.river32,
  p.river31,
  p.river30,
  p.river29,
  p.canyon41,
  p.canyon40,
  p.canyon39,
  p.canyon38,
  p.canyon37,
  p.canyon36p9,
  p.canyon36p8,
  p.canyon36p6,
  p.canyon36p4,
  p.canyon36p2,
  p.canyon36,
  p.canyon35,
  p.canyon34p8,
  p.canyon34p6,
  p.canyon34p4,
  p.canyon34p2,
  p.canyon34,
  p.canyon33,
  p.canyon32,
  p.canyon31,
  p.canyon30,
  p.canyon29,
  p.canyon28,
  p.stone01,
  p.stone07,
  p.mountain06,
  p.mountain05,
  p.mountain04,
]

const sand3 = [
  p.river03,
  p.canyon05,
  p.canyon04,
  p.canyon03,
  p.forest29p5,
  p.forest29,
  p.forest28,
  p.forest27,
  p.river10,
  p.river09,
  p.river08,
  p.river04,
]

const sands = [sand1, sand2, sand3]

// ===== 🌄 CANYONS 🌄 =====

const canyon1 = [p.mountain02, p.river01, p.river06, p.canyon01, p.canyon02, p.mountain03]
const canyon2 = [p.river02, p.forest30, p.forest29p5, p.canyon03, p.canyon04, p.canyon05, p.river03]
const canyon3 = [
  p.canyon06,
  p.mountain20,
  p.mountain19,
  p.canyon07,
  p.canyon08,
  p.canyon09,
  p.canyon10,
  p.canyon11,
  p.canyon12,
  p.canyon13,
  p.canyon14,
  p.canyon15,
  p.canyon16,
  p.canyon17,
  p.canyon18,
  p.canyon19,
  p.canyon20,
  p.canyon21,
  p.canyon22,
  p.canyon23,
  p.canyon24,
  p.canyon25,
  p.canyon26,
  p.canyon27,
  p.stone05,
  p.stone04,
  p.stone03,
  p.stone02,
  p.stone01,
  p.canyon28,
  p.canyon29,
  p.canyon30,
  p.canyon31,
  p.canyon32,
  p.canyon33,
  p.canyon34,
  p.canyon34p2,
  p.canyon34p4,
  p.canyon34p6,
  p.canyon34p8,
  p.canyon35,
  p.canyon36,
  p.canyon36p2,
  p.canyon36p4,
  p.canyon36p6,
  p.canyon36p8,
  p.canyon36p9,
  p.canyon37,
  p.canyon38,
  p.canyon39,
  p.canyon40,
  p.canyon41,
  p.river29,
  p.river28,
]

const canyon4 = [p.canyon42, p.canyon43, p.canyon44, p.canyon45]

const canyon5 = [p.canyon46, p.canyon47, p.canyon48, p.canyon49, p.canyon50]

const canyons = [canyon1, canyon2, canyon3, canyon4, canyon5]

// ===== 🌉 BRIDGES 🌉 ======

const bridge1 = [p.river05, p.river04, p.river08, p.river17]
const bridge2 = [p.river21, p.river26, p.river32, p.river22]
const pier = [p.pier01, p.pier02, p.pier03, p.pier04, p.pier05, p.pier06]

const bridges = [bridge1, bridge2, pier]

// ===== 🪨 STONES 🪨 ======

const stone1 = [
  // p.stone07,
  // p.stone01,
  // p.stone02,
  // p.stone03,
  // p.stone04,
  // p.stone05,
  // p.stone06,
  // p.mountain15,
  p.mountain14,
  p.mountain13,
  p.mountain12,
  p.mountain11p6,
  p.mountain11p3,
  p.mountain11,
  p.mountain10,
  p.mountain09,
  // p.mountain08,
  // p.mountain07,
]

const stones = [stone1]

const contour = [
  p.canyon02,
  p.canyon01,
  p.river06,
  p.river05,
  p.river04,
  p.river03,
  p.canyon05,
  p.canyon04,
  p.canyon03,
  p.forest29p5,
  p.forest29,
  p.forest28,
  p.forest27,
  p.river10,
  p.river09,
  p.river08,
  p.river17,
  p.river16,
  p.river15,
  p.river14,
  p.river13,
  p.river12,
  p.oasisGrass01,
  p.river11,
  p.oasis01,
  p.oasis02,
  p.oasis03,
  p.oasis04,
  p.oasis05,
  p.river25,
  p.oasisGrass09,
  p.river24,
  p.river23,
  p.river22,
  p.river21,
  p.river20,
  p.river19,
  p.river18,
  p.pier04,
  p.pier05,
  p.pier06,
  p.pier01,
  p.oasis06,
  p.forest25,
  p.forest24,
  p.forest23,
  p.forest22,
  p.forest21,
  p.forest20,
  p.forest19,
  p.forest18,
  p.forest17,
  p.forest16p5,
  p.forest16,
  p.forest15,
  p.forest14,
  p.forest13,
  p.forest12,
  p.forest11,
  p.forest10p6,
  p.forest10p3,
  p.forest10,
  p.forest09,
  p.forest08,
  p.forest07,
  p.forest06,
  p.forest05,
  p.forest04,
  p.forest03,
  p.river27,
  p.river26,
  p.river32,
  p.river31,
  p.river30,
  p.river29,
  p.canyon41,
  p.canyon40,
  p.canyon39,
  p.canyon38,
  p.canyon37,
  p.canyon36p9,
  p.canyon36p8,
  p.canyon36p6,
  p.canyon36p4,
  p.canyon36p2,
  p.canyon36,
  p.canyon35,
  p.canyon34p8,
  p.canyon34p6,
  p.canyon34p4,
  p.canyon34p2,
  p.canyon34,
  p.canyon33,
  p.canyon32,
  p.canyon31,
  p.canyon30,
  p.canyon29,
  p.canyon28,
  p.stone01,
  p.stone02,
  p.stone03,
  p.stone04,
  p.stone05,
  p.canyon27,
  p.canyon26,
  p.canyon25,
  p.canyon24,
  p.canyon23,
  p.canyon22,
  p.canyon21,
  p.canyon20,
  p.canyon19,
  p.canyon18,
  p.canyon17,
  p.canyon16,
  p.canyon15,
  p.canyon14,
  p.canyon13,
  p.canyon12,
  p.canyon11,
  p.canyon10,
  p.canyon09,
  p.canyon08,
  p.canyon07,
  p.mountain18,
  p.mountain17,
  p.mountain16,
  p.stone06,
  p.mountain15,
  p.mountain14,
  p.mountain13,
  p.mountain12,
  p.mountain11p6,
  p.mountain11p3,
  p.mountain11,
  p.mountain10,
  p.mountain09,
  p.mountain08,
  p.mountain07,
  p.stone07,
  p.mountain06,
  p.mountain05,
  p.mountain04,
]

const obstacles = [canyon4, canyon5]

const meleeEnemies = [
  p.melee01,
  p.melee02,
  p.melee03,
  p.melee04,
  p.melee05,
  p.melee06,
  p.melee07,
  p.melee08,
  p.melee09,
  p.melee10,
  p.melee11,
  p.melee12,
  p.melee13,
  p.melee14,
  p.melee15,
  p.melee16,
  p.melee17,
  p.melee18,
  p.melee19,
  p.melee20,
  p.melee21,
  p.melee22,
]
const rangedEnemies = [
  p.ranged01,
  p.ranged02,
  p.ranged03,
  p.ranged04,
  p.ranged05,
  p.ranged06,
  p.ranged07,
  p.ranged08,
  p.ranged09,
  p.ranged10,
  p.ranged11,
  p.ranged12,
  p.ranged13,
  p.ranged14,
  p.ranged16,
  p.ranged17,
]
const bossEnemies = [p.boss01, p.boss02, p.boss03, p.boss04, p.boss06]

const portalEnemies = [p.enemyPortal01, p.enemyPortal02, p.enemyPortal03, p.enemyPortal04]

console.log({
  forests,
  redGrounds,
  mountains,
  grasses,
  rivers,
  contour,
  obstacles,
  foams,
  sands,
  stones,
  bridges,
  canyons,
  meleeEnemies,
  rangedEnemies,
  bossEnemies,
  portalEnemies,
  spawn: p.spawn01,
  portal: p.portal01,
})

export default DesertMapSchema
