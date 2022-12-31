import { message } from "antd";
import axios from "axios";
import { checkApiError, myHeaders } from "./ApiService.helper";
import IApiService from "./IApiService";
import { setSTyp } from "./ApiService.interface";

class ApiService implements IApiService {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async post<T, R>(url: string, body: T) {
    try {
      const res = await axios.post<{ data: R; message: string }>(
        this.baseUrl + url,
        body,
        myHeaders()
      );
      message.success(res.data.message);
    } catch (error: unknown) {
      checkApiError(error);
    }
  }

  public async postWLoad<T, R>(url: string, body: T, setS: setSTyp) {
    setS(true);
    try {
      const res = await axios.post<{ data: R; message: string }>(
        this.baseUrl + url,
        body,
        myHeaders()
      );
      setS(false);
      message.success(res.data.message);
    } catch (error: unknown) {
      checkApiError(error);
      setS(false);
    }
  }

  public async postWLoadRes<T, R>(url: string, body: T, setS: setSTyp) {
    setS(true);
    try {
      const res = await axios.post<{ data: R; message: string }>(
        this.baseUrl + url,
        body,
        myHeaders()
      );
      setS(false);
      message.success(res.data.message);
      return res.data;
    } catch (error: unknown) {
      checkApiError(error);
      setS(false);
    }
  }

  public async get<T>(url: string): Promise<T> {
    try {
      const res = await axios.get<{ data: T; message: string }>(
        this.baseUrl + url,
        myHeaders()
      );
      return res.data as T;
    } catch (error: unknown) {
      throw checkApiError(error);
    }
  }

  public async getWsubMsg<T>(url: string, sS: setSTyp) {
    sS(true);
    try {
      const res = await axios.get<{ data: T; message: string }>(
        this.baseUrl + url,
        myHeaders()
      );
      sS(false);
      message.success(res.data.message);
    } catch (error: unknown) {
      sS(false);
      checkApiError(error);
    }
  }

  public async putWLoad<T, B>(url: string, body: B, sS: setSTyp) {
    sS(true);
    try {
      const res = await axios.put<{ data: T; message: string }>(
        this.baseUrl + url,
        body,
        myHeaders()
      );
      sS(false);
      message.success(res.data.message);
    } catch (error: unknown) {
      sS(false);
      checkApiError(error);
    }
  }
  public async putWLoadRes<T, B>(url: string, body: B, sS: setSTyp) {
    sS(true);
    try {
      const res = await axios.put<{ data: T; message: string }>(
        this.baseUrl + url,
        body,
        myHeaders()
      );
      sS(false);
      message.success(res.data.message);
      return res.data;
    } catch (error: unknown) {
      sS(false);
      checkApiError(error);
    }
  }
}

export default ApiService;
