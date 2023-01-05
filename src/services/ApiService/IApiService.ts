import { Dispatch } from "react";
import { Action } from "../../store/IsOpenContext";

type ResTyp<R> = Promise<{
  data: R;
  message: string;
}>;

export type dT = Dispatch<Action>;

interface IApiService {
  postWLoad<B>(url: string, body: B, dispatch: dT): void;
  postWRes<B, R>(url: string, body: B, dispatch: dT): ResTyp<R>;
  get<T>(url: string): ResTyp<T>;
  getWSub<T>(url: string, dispatch: dT): Promise<T>;
  putWSub<B, R>(url: string, body: B, dispatch: dT): ResTyp<R>;
  patchWSub<B, R>(url: string, body: B, dispatch: dT): ResTyp<R>;
  delWSub<R>(url: string, dispatch: dT): ResTyp<R>;
}

export default IApiService;
