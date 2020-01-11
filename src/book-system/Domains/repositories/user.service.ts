import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User, UserDTO } from "../entities/user.entity";
import { Repository, getRepository } from "typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {
        super(userRepository);
    }

    async findAllUsers() {
        return await this.userRepository.find();
    }

    async findUserById(id: string) {
        const user = await this.userRepository.findOne({ where: {id} });
        if (!user) {
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }
        return user;
    }

    async findUserByUsername(username: string) {
        const user = await getRepository(User)
            .createQueryBuilder("user")
            .where("user.userName = :username", { username })
            .getOne();

        return user;
    }

    async createUser(data: UserDTO) {
        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user;
    }

    async updateUserById(id: string, data: Partial<UserDTO>) {
        const user = await this.userRepository.findOne({ where: id });
        if (!user) {
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }

        await this.userRepository.update(id, data);
        return user;
    }

    async deleteUserById(id: string) {
        const user = this.userRepository.findOne({ where: id });
        if (!user) {
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }

        await this.userRepository.delete(id);
        return user;
    }
}
