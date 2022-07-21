export interface Image {
    id: number;
    subject: string;
    action: string;
    object: string;
    image_url: string;
    date: number;
    likes: Array<string>;
    comments: Comment[];
    userId: number;
}

interface Comment {
    commenter: string;
    comment: string;
}