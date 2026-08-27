import { Type } from 'class-transformer';
import {
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  Min,
  Validate,
  IsDateString,
} from 'class-validator';
import { IsFutureDateConstraint } from '../../common/validators/is-future-date.validator';

export class CreateEnquiryDto {
  @IsString()
  @IsNotEmpty()
  fullName!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9\s().-]{7,18}$/, { message: 'Enter a valid phone number' })
  contactNumber!: string;

  @IsString()
  @Matches(/\+\b[1429]{1}\d{0,2}\b/, {
    message: 'Enter a valid country code',
  })
  countryCode!: string;

  @IsEmail({}, { message: 'Enter a valid email address' })
  email!: string;

  @IsDateString({}, { message: 'Travel date must be a valid date.' })
  @Validate(IsFutureDateConstraint)
  dateOfTravel!: string;

  @Type(() => Number)
  @IsInt()
  @Min(1, { message: 'Number of travellers must be at least 1' })
  numberOfPeople!: number;

  @IsIn(['Standard', 'Deluxe', 'Luxury'], {
    message: 'Select a valid hotel category',
  })
  hotelCategory!: string;

  @Type(() => Number)
  @IsInt()
  @Min(0, { message: 'Children must be 0 or more.' })
  numberOfChildren!: number;
}
