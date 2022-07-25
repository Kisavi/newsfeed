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
    likes: Like[];
    comments: Comment[];
    userId: number;
}

export interface Like {
    like: []
}

export interface Comment {
    commenter: string;
    comment: string;
}