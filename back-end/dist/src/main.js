"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('PuppyCare API')
        .setDescription('API para gerenciamento de serviços de banho e tosa para pets')
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
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT ?? 4000);
    console.log('[X] - Backend rodando na porta 4000...');
    console.log('[📚] - Documentação Swagger disponível em: http://localhost:4000/api');
}
void bootstrap();
//# sourceMappingURL=main.js.map