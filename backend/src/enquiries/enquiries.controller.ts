import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { EnquiriesService } from './enquiries.service';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';

@Controller('enquiries')
export class EnquiriesController {
  constructor(private readonly enquiriesService: EnquiriesService) {}

  @Get('health')
  health() {
    return { success: true, message: 'travel-unbounded-api' };
  }

  @Post('enquiry')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateEnquiryDto) {
    return this.enquiriesService.create(dto);
  }
}
