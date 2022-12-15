"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Blog Pessoal')
        .setDescription('Projeto do Blog Pessoal')
        .setContact('Generation Brasil', 'www.genbr.com.br', 'gigitata199427@gmail.com')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = dist_1.SwaggerModule.createDocument(app, config);
    dist_1.SwaggerModule.setup('/swagger', app, document);
    process.env.TZ = '-03:00';
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map