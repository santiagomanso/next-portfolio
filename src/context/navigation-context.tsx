'use client';
import React from 'react';

export const NavigationContext = React.createContext<NavigationContextType>({
  handlePath: () => {},
  path: '',
});

interface Props {
  children: React.ReactNode;
}

type NavigationContextType = {
  path: string;
  handlePath: (path: string) => void;
};

export default function NavigationProvider({ children }: Props) {
  const [path, setPath] = React.useState('');

  const handlePath = React.useCallback((path: string) => {
    console.log('setting path', path);
    setPath(path);
  }, []);

  const data = React.useMemo(
    () => ({
      path,
      handlePath,
    }),
    [path, handlePath],
  );

  return (
    <NavigationContext.Provider value={data}>
      {children}
    </NavigationContext.Provider>
  );
}
