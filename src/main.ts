import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import * as helmet from "helmet";
import * as csurf from "csurf";
import * as rateLimit from "express-rate-limit";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(helmet());
    // app.use(csurf({cookie: true}));
    app.use(
        rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // limit each IP to 100 requests per windowMs
        }),
    );
    app.enableCors();

    const options = new DocumentBuilder()
        .setTitle("Books sharing system API")
        .setDescription("description")
        .setVersion("1.0")
        .addTag("user")
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup("api", app, document);

    const port = process.env.PORT || 3000;
    await app.listen(port);

    Logger.log(`Server is running on localhost:${port}`, "Bootstrap");
    Logger.log(`Server is running on environment: ${process.env.NODE_ENV}`);
}
bootstrap();
