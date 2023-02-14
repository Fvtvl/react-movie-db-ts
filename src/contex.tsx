import React, { createContext, useState, useEffect } from 'react';

type User = {
  sessionId?: string;
  username?: string;
};

type Props = {
  children: any;
};

export const Context = createContext<
  [User | undefined, React.Dispatch<React.SetStateAction<User | undefined>>]
>({} as any);

const UserProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<User | undefined>(
    JSON.parse(sessionStorage.getItem('user') || 'null')
  );
  console.log('UserProvider  state', state);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(state || null));
    if (!state) sessionStorage.removeItem('user');
  }, [state]);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default UserProvider;
