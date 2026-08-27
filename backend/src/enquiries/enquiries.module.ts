import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Enquiry, EnquirySchema } from './schemas/enquiry.schema';
import { EnquiriesService } from './enquiries.service';
import { EnquiriesController } from './enquiries.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Enquiry.name,
        schema: EnquirySchema,
      },
    ]),
  ],
  controllers: [EnquiriesController],
  providers: [EnquiriesService],
  exports: [EnquiriesService],
})
export class EnquiriesModule {}
