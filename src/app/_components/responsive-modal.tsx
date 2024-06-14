import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

type Props = {
  title: string;
  subtitle: string;
};

export default function ResponsiveModal({ subtitle, title }: Props) {
  return (
    <Drawer>
      <DrawerTrigger className='text-2xl tracking-wide text-gray-700 dark:text-white border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-md  h-full overflow-hidden row-span-1 flex justify-center items-center'>
        skills
      </DrawerTrigger>
      <DrawerContent className='h-4/5 '>
        <DrawerHeader className='font-primary'>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription className='tracking-wider'>
            {subtitle}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className='flex items-center justify-center'>
          <DrawerClose className='w-min'>
            <Button className='w-[150px]'>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
