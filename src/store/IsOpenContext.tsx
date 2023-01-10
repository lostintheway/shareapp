import { createContext, Dispatch, Reducer, useReducer } from "react";

export enum Actions {
  pf = "setAddPFisOpen",
  share = "setAddShareisOpen",
  sub = "setSubmitting",
  load = "setLoading",
  currentPf = "setCurrentPF",
}

export type IsOpenState = {
  submitting: boolean;
  loading: boolean;
  addPFisOpen: boolean;
  addShareisOpen: boolean;
};

const initIsOpen: IsOpenState = {
  addPFisOpen: false,
  addShareisOpen: false,
  submitting: false,
  loading: false,
};

export interface Action {
  type: Actions;
  payload: boolean;
}

export const reducer: Reducer<IsOpenState, Action> = (state, action) => {
  switch (action.type) {
    case Actions.pf:
      return { ...state, addPFisOpen: action.payload };
    case Actions.share:
      return { ...state, addShareisOpen: action.payload };
    case Actions.sub:
      return { ...state, submitting: action.payload };
    case Actions.load:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const IsOpenStore = createContext<{
  state: IsOpenState;
  dispatch: Dispatch<Action>;
}>({
  state: initIsOpen,
  dispatch: () => null,
});

interface ChildrenTyp {
  children: JSX.Element;
}

const IsOpenProvider = ({ children }: ChildrenTyp): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initIsOpen);
  return (
    <IsOpenStore.Provider value={{ state, dispatch }}>
      {children}
    </IsOpenStore.Provider>
  );
};

// HOC function
export function withIsOpen(WrappedComponent: () => JSX.Element) {
  return function EnhancedComponent(props: object) {
    return (
      <IsOpenProvider>
        <WrappedComponent {...props} />
      </IsOpenProvider>
    );
  };
}
