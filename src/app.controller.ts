import { Controller, Get, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";

@Controller("")
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getFirstLook(@Res() res: Response) {
        const message = {
            message: "hi there",
        };
        return message;
    }

    @Get("hello")
    getHello(): string {
        return this.appService.getHello();
    }
}
