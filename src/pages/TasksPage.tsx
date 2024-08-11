import React from 'react';
import { addUserToDB } from '../utils/apiHandler'
import { User } from '../utils/types' 

const TEST_USER : User = {
  firstName: 'Cristi',
  lastName: 'Nelu',
  createdAt: Date.now()
}

const handleAddUser = async () => {
  await addUserToDB(TEST_USER);
}

function TasksPage() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        <button style={{margin: "auto"}} onClick={handleAddUser}>Add user</button>
      </div>
    );
  }
  
export default TasksPage;