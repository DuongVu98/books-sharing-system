import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    message = {
        message: "Hello! Welcome to Books sharing system backend",
    };
    getHello() {
        return this.message;
    }
}
