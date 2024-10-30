'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface Props {
  images: string[];
}

export default function ImageGallery({ images }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className=''>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {images.map((image, index) => (
          <div
            key={index}
            className='relative aspect-square border border-slate-300 rounded-lg dark:border-stone-700 bg-stone-600'
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              fill
              className='object-cover rounded-lg cursor-pointer border transition-all ease-in-out duration-300 hover:scale-105 dark:border-stone-700'
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {isDesktop ? (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className='max-w-3xl dark:bg-neutral-900 dark:border-stone-700'>
            <DialogHeader>
              <DialogTitle className='text-center'>
                Image {currentImageIndex + 1} of {images.length}
              </DialogTitle>
              <DialogDescription className='text-center'>
                {images[currentImageIndex]}
              </DialogDescription>
            </DialogHeader>
            <div className='relative aspect-video'>
              <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                fill
                className='object-contain'
              />
            </div>
            <div className='flex justify-between items-center mt-4'>
              <Button
                variant='outline'
                className='dark:border-stone-700 dark:bg-gradient-to-br dark:from-stone-800 dark:hover:bg-stone-700'
                size='icon'
                onClick={prevImage}
                aria-label='Previous image'
              >
                <ChevronLeft className='h-4 w-4' />
              </Button>
              <Button
                variant='outline'
                className='dark:border-stone-700 dark:bg-gradient-to-br dark:from-stone-800 dark:hover:bg-stone-700'
                size='icon'
                onClick={closeModal}
                aria-label='Close modal'
              >
                <X className='h-4 w-4' />
              </Button>
              <Button
                variant='outline'
                className='dark:border-stone-700 dark:bg-gradient-to-br dark:from-stone-800 dark:hover:bg-stone-700'
                size='icon'
                onClick={nextImage}
                aria-label='Next image'
              >
                <ChevronRight className='h-4 w-4' />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={modalOpen} onOpenChange={setModalOpen}>
          <DrawerContent className='max-h-screen overflow-y-auto dark:bg-neutral-900 p-4 outline-none min-h-[70vh]'>
            <DrawerHeader className='text-left'>
              <DrawerTitle>
                Image {currentImageIndex + 1} of {images.length}
              </DrawerTitle>
              <DrawerDescription className='text-center'>
                {images[currentImageIndex]}
              </DrawerDescription>
            </DrawerHeader>
            <div className='relative aspect-video h-[40vh] w-full'>
              <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                fill
                className='object- w-full h-full'
              />
            </div>
            <DrawerFooter className=''>
              <div className='flex justify-between items-center'>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={prevImage}
                  aria-label='Previous image'
                >
                  <ChevronLeft className='h-4 w-4' />
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={closeModal}
                  aria-label='Close drawer'
                >
                  <X className='h-4 w-4' />
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={nextImage}
                  aria-label='Next image'
                >
                  <ChevronRight className='h-4 w-4' />
                </Button>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
