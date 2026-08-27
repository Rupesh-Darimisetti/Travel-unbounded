import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enquiry, EnquiryDocument } from './schemas/enquiry.schema';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';

@Injectable()
export class EnquiriesService {
  constructor(
    @InjectModel(Enquiry.name)
    private readonly enquiryModel: Model<EnquiryDocument>,
  ) {}

  async create(dto: CreateEnquiryDto) {
    try {
      const enquiry = await this.enquiryModel.create(dto);
      return {
        id: enquiry._id.toString(),
        message: 'Enquiry submitted successfully',
      };
    } catch (error) {
      console.error('Enquiry submitted successfully', error);
      throw new InternalServerErrorException(
        'Something went wrong while submitting the enquiry. Please try again later.',
      );
    }
  }
}
