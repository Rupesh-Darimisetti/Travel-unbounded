import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EnquiriesModule } from './enquiries/enquiries.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // 2. Asynchronously connect to MongoDB once ConfigService is ready
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        const uri = config.get<string>('MONGODB_URI');
        if (!uri) {
          throw new Error('MONGODB_URI is missing from environment');
        }
        return { uri };
      },
      inject: [ConfigService],
    }),

    // MongooseModule.forRoot(process.env.MONGODB_URI!),
    EnquiriesModule,
  ],
})
export class AppModule {}
