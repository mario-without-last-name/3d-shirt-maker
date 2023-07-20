import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 0], fov: 25 }} gl={{ preserveDrawingBuffer: true }} className='w-full max-w-full h-full transition-all ease-in'>
      <ambientLight intensity={0.5} />
      <Environment preset="city"/>

      <CameraRig>    {/* These will break if there is <div> inside it */}
        <Backdrop /> {/* There will an error message in the web console: */}
        <Center>
          <Shirt />  {/* R3F: Div is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively */}
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel