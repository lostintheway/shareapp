import { message } from "antd";
import axios from "axios";
import { checkApiError, myHeaders } from "./ApiService.helper";
import IApiService, { dT } from "./IApiService";
import { Actions } from "../../store/IsOpenContext";

class ApiService implements IApiService {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  getWSub<T>(url: string, dispatch: dT): Promise<T> {
    throw new Error("Method not implemented.");
  }

  patchWSub<B, R>(
    url: string,
    body: B,
    dispatch: dT
  ): Promise<{ data: R; message: string }> {
    throw new Error("Method not implemented.");
  }

  delWSub<R>(url: string, dispatch: dT): Promise<{ data: R; message: string }> {
    throw new Error("Method not implemented.");
  }

  public async postWLoad<B, R>(url: string, body: B, dispatch: dT) {
    dispatch({ type: Actions.sub, payload: true });
    try {
      const res = await axios.post<{ data: R; message: string }>(
        this.baseUrl + url,
        body,
        myHeaders()
      );
      dispatch({ type: Actions.sub, payload: false });
      message.success(res.data.message);
    } catch (error: unknown) {
      dispatch({ type: Actions.sub, payload: false });
      checkApiError(error);
    }
  }

  public async postWRes<B, R>(url: string, body: B, dispatch: dT) {
    dispatch({ type: Actions.sub, payload: true });
    try {
      const res = await axios.post<{ data: R; message: string }>(
        this.baseUrl + url,
        body,
        myHeaders()
      );
      dispatch({ type: Actions.sub, payload: false });
      message.success(res.data.message);
      return res.data;
    } catch (error: unknown) {
      dispatch({ type: Actions.sub, payload: false });
      throw checkApiError(error);
    }
  }

  public async get<T>(url: string) {
    try {
      const res = await axios.get<{ data: T; message: string }>(
        this.baseUrl + url,
        myHeaders()
      );
      return res.data;
    } catch (error: unknown) {
      throw checkApiError(error);
    }
  }

  public async getWsubMsg<T>(url: string, dispatch: dT) {
    dispatch({ type: Actions.sub, payload: false });
    try {
      const res = await axios.get<{ data: T; message: string }>(
        this.baseUrl + url,
        myHeaders()
      );
      dispatch({ type: Actions.sub, payload: false });
      message.success(res.data.message);
    } catch (error: unknown) {
      dispatch({ type: Actions.sub, payload: false });
      throw checkApiError(error);
    }
  }

  public async putWSub<B, T>(url: string, body: B, dispatch: dT) {
    dispatch({ type: Actions.sub, payload: false });
    try {
      const res = await axios.put<{ data: T; message: string }>(
        this.baseUrl + url,
        body,
        myHeaders()
      );
      dispatch({ type: Actions.sub, payload: false });
      message.success(res.data.message);
      return res.data;
    } catch (error: unknown) {
      dispatch({ type: Actions.sub, payload: false });
      throw checkApiError(error);
    }
  }
}

export default ApiService;
