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

export default function Skills() {
  return (
    <Drawer>
      <DrawerTrigger className='text-2xl tracking-wide text-gray-700 dark:text-white border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-md  h-full overflow-hidden row-span-1 flex justify-center items-center'>
        skills
      </DrawerTrigger>
      <DrawerContent className='h-4/5 dark:bg-gradient-to-b dark:from-gray-900 dark:to-neutral-950'>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className='flex items-center justify-center'>
          <DrawerClose className='w-min'>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
