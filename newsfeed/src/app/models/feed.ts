export interface Feed {
    id: number;
    subject: string;
    action: string;
    pronoun: string;
    object: string;
    image_url: string;
    message: string;
    context: string;
    date: number;
    likes: Array<string>;
    comments: Comment[];
    userId: number;
}

interface Comment {
    commenter: string;
    comment: string;
}