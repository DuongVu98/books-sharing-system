import { UserService } from "src/book-system/Domains/repositories/user.service";
import { Get, Param, Controller } from "@nestjs/common";
import { User } from "src/book-system/Domains/entities/user.entity";

@Controller("api/login")
export class LoginController {
    constructor(private userService: UserService) {}

    @Get("/:username/:password")
    getUser(
        @Param("username") username: string,
        @Param("password") password: string,
    ) {
        if (username === "tony" && password === "tungduong98") {
            return this.userService.findUserByUsername("tony");
        } else {
            return {
                message: "invalid username or password",
            };
        }
    }
}
