import CanvasControl from '@/components/atoms/CanvasControl';
import Main from '@/components/template';
import clsx from 'clsx';
import Image from 'next/image';
import { forwardRef, useRef, useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const Canvas = forwardRef((props, ref) => (
  // @ts-ignore
  <ReactSketchCanvas {...props} ref={ref} />
));
Canvas.displayName = 'Canvas';

export default function Index() {
  const [color, setColor] = useState('rgba(99, 102, 241, 0.6)');
  const canvasRef = useRef(null);

  const clearHandler = () => {
    // @ts-ignore
    const clearCanvas = canvasRef.current?.clearCanvas;

    if (clearCanvas) {
      clearCanvas();
    }
  };

  return (
    <Main className='flex flex-col-reverse items-center h-full justify-center leading-6 md:flex-row'>
      <Canvas
        ref={canvasRef}
        // @ts-ignore
        canvasColor='transparent'
        style={{
          zIndex: 5,
        }}
        className='bg-transparent absolute top-0 left-0 h-screen w-full'
        strokeWidth={5}
        strokeColor={color}
      />
      <div className='w-full border-solid md:w-1/2 bg-secondary text-center md:text-left select-none'>
        <h1>Reva Doni Aprilio</h1>
        <p
          className={clsx(
            'bg-clip-text text-transparent bg-gradient-to-r pt-2',
            'text-xl font-bold md:text-2xl',
            'from-primary-500 via-ternary-500 to-secondary-500'
          )}
        >
          Student & FrontEnd Developer
        </p>
        <p className='pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 sm:pr-10 lg:text-lg'>
          {"Hello, I'm Reva Doni Aprilio. Welcome to my personal website."}
        </p>
      </div>
      <div className='relative w-full max-w-md mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 select-none'>
        <Image alt='doodle' src='/me.svg' priority width={200} height={300} />
      </div>
      <CanvasControl
        clearCanvas={clearHandler}
        color={color}
        setColor={setColor}
      />
    </Main>
  );
}
