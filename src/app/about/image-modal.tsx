import * as React from 'react';
import Image, { StaticImageData } from 'next/image';

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
import { MediaInterface } from '../data/media';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface Props {
  item: MediaInterface;
  language: string;
}

export function ImageModal({ item, language }: Props) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Image
            src={item.image}
            width={300}
            height={200}
            alt='Media 4'
            className='rounded-lg bg-slate-500 w-full p-[1px] aspect-video cursor-pointer md:w-5/6 object-cover'
          />
        </DialogTrigger>
        <DialogContent className='dark:bg-neutral-900'>
          <DialogHeader>
            <DialogTitle>{item.alt[language]}</DialogTitle>
            <DialogDescription>{item.description[language]}</DialogDescription>
          </DialogHeader>

          <figure className=''>
            <FullImage image={item.image} />
          </figure>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Image
          src={item.image}
          width={300}
          height={200}
          alt='Media 4'
          className='rounded-lg bg-slate-500 w-full p-[1px] aspect-video cursor-pointer md:w-5/6 object-cover'
        />
      </DrawerTrigger>
      <DrawerContent className='max-h-[80%]'>
        <DrawerHeader className='text-left'>
          <DrawerTitle>{item.alt[language]}</DrawerTitle>
          <DrawerDescription>{item.description[language]}</DrawerDescription>
        </DrawerHeader>
        <figure className='max-h-[50%] overflow-auto  px-4 md:px-0'>
          <FullImage image={item.image} />
        </figure>
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function FullImage({
  className,
  image,
}: {
  className?: string;
  image: StaticImageData;
}) {
  return (
    <Image
      src={image}
      alt='Media 4'
      className='rounded-lg bg-slate-500 w-full h-full object-cover'
    />
  );
}
