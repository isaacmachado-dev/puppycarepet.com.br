import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // Habilitar validação global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configurar Swagger/OpenAPI
  const config = new DocumentBuilder()
    .setTitle('PuppyCare API')
    .setDescription(
      'API para gerenciamento de serviços de banho e tosa para pets',
    )
    .setVersion('1.0')
    .addTag('clientes', 'Gerenciamento de clientes')
    .addTag('pets', 'Gerenciamento de pets')
    .addTag('ordens-servicos', 'Gerenciamento de ordens de serviço')
    .addTag('rotas', 'Gerenciamento de rotas')
    .addTag('rotas-paradas', 'Gerenciamento de paradas de rotas')
    .addTag('mensagens', 'Gerenciamento de mensagens')
    .addTag('status', 'Gerenciamento de status de ordens')
    .addTag('funcionarios', 'Gerenciamento de funcionários')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 4000);
  console.log('[X] - Backend rodando na porta 4000...');
  console.log(
    '[📚] - Documentação Swagger disponível em: http://localhost:4000/api',
  );
}
void bootstrap();
