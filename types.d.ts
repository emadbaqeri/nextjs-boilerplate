import "@total-typescript/ts-reset";

declare global {
  interface ApiResponseType<T> extends AxiosResponse {
    data: T;
  }
}
