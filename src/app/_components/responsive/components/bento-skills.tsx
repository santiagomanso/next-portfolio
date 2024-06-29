import * as React from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
import { Label } from '@/components/ui/label';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Skills() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const handleClick = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <article
      className='border-[1px] flex items-center justify-center  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg  h-full overflow-hidden row-span-1'
      onClick={handleClick}
    >
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild className='transition-none'>
          <Button
            variant='ghost'
            className='text-3xl tracking-wider text-gray-700 dark:text-white'
          >
            Skills
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className='text-left'>
            <DrawerTitle>Skills</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DrawerDescription>
          </DrawerHeader>
          <ProfileForm className='px-4' />
          <DrawerFooter className='pt-2'>
            <DrawerClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </article>
  );
}

function ProfileForm({ className }: React.ComponentProps<'form'>) {
  return (
    <form className={cn('grid items-start gap-4', className)}>
      <div className='grid gap-2'>
        <Label htmlFor='email'>Email</Label>
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='username'>Username</Label>
      </div>
      <Button type='submit'>Save changes</Button>
    </form>
  );
}
