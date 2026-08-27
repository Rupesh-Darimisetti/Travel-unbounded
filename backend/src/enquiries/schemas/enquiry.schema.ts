import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EnquiryDocument = HydratedDocument<Enquiry>;

@Schema({
  timestamps: { createdAt: true, updatedAt: false },
  versionKey: false,
})
export class Enquiry {
  @Prop({ required: true, trim: true })
  fullName!: string;

  @Prop({ required: true, trim: true })
  contactNumber!: string;

  @Prop({ required: true, trim: true })
  countryCode!: string;

  @Prop({ required: true, trim: true })
  email!: string;

  @Prop({ required: true })
  dateOfTravel!: string;

  @Prop({ required: true, min: 1 })
  numberOfPeople!: number;

  @Prop({ required: true, enum: ['Standard', 'Deluxe', 'Luxury'] })
  hotelCategory!: string;

  @Prop({ required: true, min: 0, default: 0 })
  numberOfChildren!: number;

  createdAt!: Date;
}

export const EnquirySchema = SchemaFactory.createForClass(Enquiry);
