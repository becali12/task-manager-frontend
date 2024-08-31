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
    category?: string;
    isCreateCategoryCard: boolean;
    taskCount?: number;
    createdDate?: string;
    categoriesNumber: number;
    onChoose: () => void;
  }