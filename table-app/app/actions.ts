'use server'
import path from 'path';
import fsPromises from 'fs/promises';
import fs from 'fs';

interface User {
    id: number;
    name: string;
    username: string;
}

export async function loadUsers() {
    let userJson = await fsPromises.readFile(path.join(process.cwd(), 'users.json'), 'utf-8');
    let users: User[] = await JSON.parse(userJson);
    return users;
}


export async function saveUsers(user: any) {
    let userJson = await fsPromises.readFile(path.join(process.cwd(), 'data.json'), 'utf-8');
    let users: User[] = await JSON.parse(userJson);
    users.push(user);
    let write = await fs.writeFile(path.join(process.cwd(), 'data.json'), JSON.stringify(users), (e) => console.log());
    return write;
}

export async function removeUser(id:Number) {
    
}