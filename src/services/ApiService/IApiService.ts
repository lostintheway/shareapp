import { setSTyp } from "./ApiService.interface";

type ResTyp1<R> = Promise<
  | {
      data: R;
      message: string;
    }
  | undefined
>;

interface IApiService {
  post<T, R>(url: string, body: T): Promise<void>;
  postWLoad<T, R>(url: string, body: T, sS: setSTyp): void;
  postWLoadRes<T, R>(url: string, body: T, setS: setSTyp): ResTyp1<R>;
  get<T>(url: string): Promise<T>;
}

export default IApiService;
