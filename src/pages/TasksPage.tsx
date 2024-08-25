import React, { useEffect, useState } from 'react';
import '../styles/Tasks.css';
import CategoryCard from '../components/CategoryCard';
import { Category } from '../utils/types';

function TasksPage() {

  const [categories, setCategories] = useState<Category[]>([]);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number|null>(null);

  // maybe add category option should be already present if 0 categories exist
  const handleAddCategory = () => {
    setShowAddCategory(true);
  }

  const handleChosenCategory = (index : number) => {
    setSelectedCategory(index);
    console.log('Selected category with index ', index);
  }

  const renderedCategories = categories.map((category, index) => (
    <CategoryCard key={index} category={category.name} taskCount={category.taskCount} createdDate={category.createdDate} onChoose={() => handleChosenCategory(index)} />
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
        categories.length > 0 && !selectedCategory &&
        <div> <h1>Choose a category to get started</h1> 
          <div className='task-categories-list'>
              { renderedCategories }
          </div>
        </div>
      }
      {/* TODO: add a category card for creating a new category */}
      </div>
    );
  }
  
export default TasksPage;