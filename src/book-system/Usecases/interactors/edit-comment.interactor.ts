import { CommentService } from "src/book-system/Domains/repositories/comment.service";
import { CommentDTO } from "src/book-system/Domains/entities/comment.entity";

export class EditCommentInteractor {

    constructor(private commentService: CommentService){}

    repairComment(id: string, data: CommentDTO){
        return this.commentService.updateComment(id, data);
    }

    deleteComment(id: string){
        return this.commentService.deleteComment(id);
    }
}