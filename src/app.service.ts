import { Injectable } from '@nestjs/common';
import { BaseResponse } from './utils/responses/base.dto';

@Injectable()
export class AppService {
  getIndex(): BaseResponse<object> {
    return new BaseResponse('Server running successfully');
  }
}
