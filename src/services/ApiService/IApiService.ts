import { Dispatch } from "react";
import { Action } from "../../store/IsOpenContext";
import { dispatchTyp } from "../../store/useGlobalStore/useGlobalStore.types";

type ResTyp<R> = Promise<{
  data: R;
  message: string;
}>;

export type dT = Dispatch<Action>;

interface IApiService {
  postWLoad<B>(url: string, body: B, dispatch: dispatchTyp): void;
  postWRes<B, R>(url: string, body: B, dispatch: dispatchTyp): ResTyp<R>;
  get<T>(url: string): ResTyp<T>;
  getWSub<T>(url: string, dispatch: dispatchTyp): Promise<T>;
  putWSub<B, R>(url: string, body: B, dispatch: dispatchTyp): ResTyp<R>;
  patchWSub<B, R>(url: string, body: B, dispatch: dispatchTyp): ResTyp<R>;
  delWSub<R>(url: string, dispatch: dispatchTyp): ResTyp<R>;
}

export default IApiService;
