import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'; // ✅ ADICIONAR
import { AppModule } from './app.module';
import * as path from 'path'; // ✅ ADICIONAR
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // ✅ NestExpressApplication

  // ✅ ADICIONAR: Serve arquivos uploads
  app.useStaticAssets(path.join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  // Habilitar CORS (já OK)
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:4000',
      'https://puppycarepet.com.br',
      'https://www.puppycarepet.com.br',
    ],
    credentials: true,
  });

  // Resto igual...
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      skipMissingProperties: true,  // ✅ ESSENCIAL! Ignora campos undefined/vazios no PATCH
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('PuppyCare API')
    .setDescription('API para gerenciamento de serviços de banho e tosa para pets')
    .setVersion('1.0')
    .addTag('usuarios', 'Gerenciamento de usuários do sistema')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 4000, '0.0.0.0');
  console.log(`[X] - Backend rodando na porta ${process.env.PORT ?? 4000}`);
  console.log(`[📚] - Swagger: http://localhost:${process.env.PORT ?? 4000}/api`);
}
void bootstrap();
