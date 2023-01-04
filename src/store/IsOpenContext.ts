export type IsOpenActions = {
  setAddPFisOpen: "setAddPFisOpen";
  setAddShareisOpen: "setAddShareisOpen";
};

export type IsOpenState = {
  addPFisOpen: boolean;
  addShareisOpen: boolean;
};

const initIsOpen: IsOpenState = {
  addPFisOpen: false,
  addShareisOpen: false,
};

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case first:
      return { ...state, ...payload };

    default:
      return state;
  }
};
