import { Controller, Get, Res, Redirect, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";

@Controller("")
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("")
    @Redirect("hello", 302)
    getFirstLook(@Res() res: Response) {
        return null;
    }

    @Get("hello")
    getHello() {
        return this.appService.getHello();
    }
}
