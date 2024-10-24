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

import { useMediaQuery } from '@/hooks/useMediaQuery';

interface Props {
  img: string;
  language: string;
  alt: { [key: string]: string };
  description: { [key: string]: string };
}

interface Label {
  close: { [key: string]: string };
}

const labels: Label = {
  close: {
    en: 'Close',
    es: 'Cerrar',
    de: 'Schließen',
  },
};

export function ImageModal({ img, alt, language, description }: Props) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Image
            src={img}
            alt='Media 4'
            placeholder='blur'
            className='max-h-[450px] object-scale-down shadow-lg cursor-pointer bg-gradient-to-br dark:from-current dark:to-stone-900 rounded-lg  dark:border-stone-700 border-stone-300'
          />
        </DialogTrigger>
        <DialogContent className='dark:bg-neutral-900 max-w-[1000px] max-h-[768px] w-fit h-fit'>
          <DialogHeader>
            <DialogTitle>{alt[language]}</DialogTitle>
            <DialogDescription className='text-clip max-w-[340px]'>
              {description[language]}
            </DialogDescription>
          </DialogHeader>

          <figure className='overflow-hidden rounded-lg'>
            <FullImage img={img} />
          </figure>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className='lg:hidden'>
        <Image
          src={img}
          width={300}
          height={200}
          alt='Media 4'
          placeholder='blur'
          className='rounded-lg bg-slate-500 w-full p-[1px] aspect-video cursor-pointer md:w-5/6 object-cover'
        />
      </DrawerTrigger>
      <DrawerContent className='max-h-[80%] dark:bg-neutral-900'>
        <DrawerHeader className='text-left'>
          <DrawerTitle>{alt[language]}</DrawerTitle>
          <DrawerDescription>{description[language]}</DrawerDescription>
        </DrawerHeader>
        <figure className='max-h-[50%] overflow-auto  px-4 md:px-0'>
          <FullImage img={img} />
        </figure>
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button
              variant='outline'
              className='bg-gradient-to-br border-gray-500/30  from-neutral-300 to-neutral-300 dark:from-neutral-800 dark:to-stone-950 dark:border-stone-800'
            >
              {labels.close[language]}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function FullImage({ className, img }: { className?: string; img: string }) {
  return (
    <Image
      src={img}
      alt='Media 4'
      className='rounded-lg w-full h-full'
      placeholder='blur'
    />
  );
}
