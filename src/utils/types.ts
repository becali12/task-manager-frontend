export interface User {
    firstName: string;
    lastName: string;
    createdAt: number;
}

export interface Category {
    name: string;
    taskCount: number;
    createdDate: string;
}

export interface CategoryCardProps {
    category: string;
    taskCount: number;
    createdDate: string;
    onChoose: () => void;
  }