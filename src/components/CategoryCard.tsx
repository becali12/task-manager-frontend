import React from 'react';
import { CategoryCardProps } from '../utils/types';
import '../styles/CategoryCard.css'

function CategoryCard({ category, taskCount, createdDate, onChoose} : CategoryCardProps) {
    return (
        <div className="category-card">
            <h3>{category}</h3>
            <p>Tasks: {taskCount}</p>
            <p>Created: {createdDate}</p>
            <button onClick={onChoose}>Choose Category</button>
        </div>
    );
}

export default CategoryCard;