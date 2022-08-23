import { atomDrawer } from '@/store';
import { useAtom } from 'jotai';

const useDrawer = () => {
  const [isOpen, setIsOpen] = useAtom(atomDrawer);
  const changeDrawer = () => setIsOpen((prev) => !prev);

  return { isOpen, changeDrawer };
};

export default useDrawer;
