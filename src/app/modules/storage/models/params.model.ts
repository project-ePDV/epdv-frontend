import { HttpParams } from "@capacitor/core";

export interface Params extends HttpParams {
  page: string;
  size: string;
}