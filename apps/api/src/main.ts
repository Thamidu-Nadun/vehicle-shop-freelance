import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3030;
  await app.listen(PORT, '0.0.0.0');
  console.log(`Server is running on ${PORT}`);
}
bootstrap();
