import { CommentService } from "src/book-system/Domains/repositories/comment.service";

export class AddCommentInteractor{
    
    constructor(private commentService: CommentService){}
}