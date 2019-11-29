import { CommentService } from "src/book-system/Domains/repositories/comment.service";
import { CommentDTO } from "src/book-system/Domains/entities/comment.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AddCommentInteractor{
    
    constructor(private commentService: CommentService){}

    addComment(data: CommentDTO){
        return this.commentService.createComment(data);
    }
}