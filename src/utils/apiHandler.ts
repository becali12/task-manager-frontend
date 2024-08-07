
import { User } from './types' 

const BASE_URL = 'http://127.0.0.1:5000';

const addUserToDB = async (user : User) => {
    const response = await fetch(BASE_URL + '/addUser',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user })
        }
    );
    const data = await response.json();
    console.log(data);
}

export { addUserToDB }