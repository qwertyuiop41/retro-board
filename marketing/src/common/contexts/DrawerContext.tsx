import React, { useReducer } from 'react';

type State = {
  isOpen: boolean;
};

type DrawerProviderProps = {
  children: React.ReactNode;
};

const initialState: State = {
  isOpen: false,
};

function reducer(state: State, action: any) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}
export const DrawerContext = React.createContext({});

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};
