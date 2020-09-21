import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(configService.port);
  // TODO: validation pipe
}

bootstrap()
  .then(() => console.log(`Server listening on port: ${configService.port}`))
  .catch(() => process.exit(1));
