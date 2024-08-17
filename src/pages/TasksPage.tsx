import React, { useState } from 'react';
import '../styles/Tasks.css';

function TasksPage() {

  const [categories, setCategories] = useState([]);
  const [showAddCategory, setShowAddCategory] = useState(false);

  // maybe add category fields should be already present if 0 categories exist
  const handleAddCategory = () => {
    setShowAddCategory(true);
  }

  return (
      <div className='task-categories-container'>
        {
          categories.length === 0 &&
          <div>
              <p>Add a category to get started</p>
              <button onClick={handleAddCategory}> Add category </button>
          </div>
        }
        {
          categories.length > 0 &&
          <div>
              <p>Choose a category to get started</p>
              <button> Add category </button>
          </div>
        }
      </div>
    );
  }
  
export default TasksPage;