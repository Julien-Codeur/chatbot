export interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export interface ChatProps {
    initialMessages?: Message[];
}

export interface FeedbackState {
    likes: Set<number>;
    dislikes: Set<number>;
}