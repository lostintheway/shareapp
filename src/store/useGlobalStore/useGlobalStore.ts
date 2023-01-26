import { createStore } from "react-hooks-global-state";
import { Action, Actions, State } from "./useGlobalStore.types";

const initialState: State = {
  disabled: false,
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Actions.disableBtn:
      return { ...state, disabled: true };
    case Actions.enableBtn:
      return { ...state, disabled: false };
    default:
      return state;
  }
};

export const { dispatch, getState, useStoreState } = createStore(
  reducer,
  initialState
);

export function useGlobalStore() {
  const disabled = useStoreState("disabled");
  return {
    disabled,
  };
}
