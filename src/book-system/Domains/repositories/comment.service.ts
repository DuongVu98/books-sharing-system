import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comment, CommentDTO } from "../entities/comment.entity";
import { Repository } from "typeorm";

@Injectable()
export class CommentService {
    
    constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>){
    }

    async findAllComment(){
        return await this.commentRepository.find();
    }

    async createComment(data: CommentDTO){
        const comment = await this.commentRepository.create(data);
        await this.commentRepository.save(comment);

        return comment;
    }

    async updateComment(id:string, data: Partial<CommentDTO>){
        const comment = await this.commentRepository.findOne({where: id});
        if(!comment){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        await this.commentRepository.update(id, data);

        return comment;
    }

    async deleteComment(id: string){
        const comment = await this.commentRepository.findOne({where: id});
        if(!comment){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        await this.commentRepository.delete(id);

        return comment;
    }

}