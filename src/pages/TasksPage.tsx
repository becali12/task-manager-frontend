import React, { useEffect, useState } from 'react';
import '../styles/Tasks.css';
import CategoryCard from '../components/CategoryCard';
import { Category } from '../utils/types';

function TasksPage() {

  const [categories, setCategories] = useState<Category[]>([]);
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number>(-1);

  const handleChosenCategory = (index : number) => {
    setSelectedCategory(index);
    console.log('Selected category with index ', index);
  }

  const handleCreateCategory = () => {
    setShowCreateCategory(!showCreateCategory);
    console.log('Toggle activated');
  }

  const renderedCategories = categories.map((category, index) => (
    <CategoryCard key={index} categoriesNumber={categories.length} category={category.name} taskCount={category.taskCount} createdDate={category.createdDate} isCreateCategoryCard={false} onChoose={() => handleChosenCategory(index)} />
  ));

  useEffect(() => {
    console.log('Setting dummy categories');
    setCategories([{ name: 'Personal', taskCount: 0, createdDate: '1234' },
      { name: 'Job', taskCount: 3, createdDate: '1234' },
      { name: 'Fitness', taskCount: 2, createdDate: '1234' },
      { name: 'Guitar', taskCount: 1, createdDate: '1234' },
      ]);
  }, []);

  return (
      <div className='task-categories-container'>
        {
          categories.length === 0 &&
          <div>
            <p>Add a category to get started</p>
          </div>
        }
        {
        selectedCategory < 0 &&
          <div> <h1>Choose a category to get started</h1> 
              <div className='task-categories-list'>
                <CategoryCard categoriesNumber={categories.length} isCreateCategoryCard={true} onChoose={handleCreateCategory}/>
                {renderedCategories}
              </div>
          </div>
        }
      </div>
    );
  }
  
export default TasksPage;