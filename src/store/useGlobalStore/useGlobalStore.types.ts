export enum Actions {
  disableBtn = "disableBtn",
  enableBtn = "enableBtn",
}

export type Action = { type: Actions.disableBtn } | { type: Actions.enableBtn };

export interface State {
  disabled: boolean;
}

export type dispatchTyp = (action: Action) => Action;
