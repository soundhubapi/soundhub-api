import { Module, forwardRef } from '@nestjs/common';
import { TracksController } from './spotify.controller';
import { SpotifyService } from './spotify.service';
import { SpotifyAuthService } from './auth/spotify-auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TracksSchema } from './schemas/tracks.schema';
import { PubModule } from 'src/pub/pub.module';

@Module({
  imports: [
    forwardRef(() => PubModule),
    MongooseModule.forFeature([{ name: 'Tracks', schema: TracksSchema }]),
  ],
  controllers: [TracksController],
  providers: [SpotifyService, SpotifyAuthService],
  exports: [SpotifyAuthService],
})
export class SpotifyModule {}
