export class BaseResponse<T> {
  status: boolean;
  message?: string;
  data?: T;

  constructor(message: string, data?: T) {
    this.status = true;
    this.message = message;
    this.data = data;
  }
}
