import React from 'react';
import { CategoryCardProps } from '../utils/types';
import '../styles/CategoryCard.css'

function CategoryCard({ category, categoriesNumber, taskCount, createdDate, isCreateCategoryCard, onChoose }: CategoryCardProps) {
    const createCategoriesMessage = categoriesNumber > 4 ? 'Need more categories? Gosh.. Create one here...' : 'Create a new category'
    return !isCreateCategoryCard ? 
        (
            <div className="category-card">
                <h3>{category}</h3>
                <p>Tasks: {taskCount}</p>
                <p>Created: {createdDate}</p>
                <button onClick={onChoose}>Choose Category</button>
            </div>
        )
    :
        (
            <div className="category-card">
                <h3>New category</h3>
                <p>{ createCategoriesMessage }</p>
                <button onClick={onChoose}>Create Category</button>
            </div>
        )
}

export default CategoryCard;