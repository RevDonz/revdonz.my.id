import { HiCheckCircle, HiTrash } from 'react-icons/hi';
interface ControlProps {
  clearCanvas: () => void;
  color: string;
  setColor: (color: string) => void;
}

const CanvasControl = ({ clearCanvas, color, setColor }: ControlProps) => {
  const colors = [
    'rgba(99, 102, 241, 0.6)',
    'rgba(168, 85, 247, 0.6)',
    'rgba(236, 72, 153, 0.6)',
  ];

  return (
    <div className='fixed right-3 p-2 bg-gray-200 dark:bg-dark-600 rounded-full top-[25%] md:top-[unset] z-50'>
      <div className='flex flex-col space-y-1'>
        {colors.map((data, key) => {
          return (
            <button
              onClick={() => setColor(data)}
              className='w-8 h-8 rounded-full'
              style={{ backgroundColor: data }}
              key={key}
            >
              {color === data && <HiCheckCircle className='mx-auto text-xl' />}
            </button>
          );
        })}

        <button
          className='w-8 h-8 rounded-full bg-gray-300 dark:bg-black'
          onClick={() => {
            clearCanvas();
          }}
        >
          <HiTrash className='mx-auto' />
        </button>
      </div>
    </div>
  );
};

export default CanvasControl;
