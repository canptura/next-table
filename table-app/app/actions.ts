'use server'
import path from 'path';
import fsPromises from 'fs/promises';
import fs from 'fs';
import { revalidatePath } from 'next/cache';

interface User {
    id: number;
    name: string;
    username: string;
}

const dataFile = 'users.json';

export async function loadUsers() {
    let userJson = await fsPromises.readFile(path.join(process.cwd(), dataFile), 'utf-8');
    let users: User[] = await JSON.parse(userJson);
    return users;
}


export async function saveUser(user: any) {
    let users = await loadUsers();
    users.push(user);
    saveUsers(users);
}

export async function saveUsers(users: User[]) {
    let write = await fs.writeFile(path.join(process.cwd(), dataFile), JSON.stringify(users),()=>{});
    revalidatePath('/');
    return write;
}

export async function removeUser(id: number) {
    let users = await loadUsers();
    let index = users.map( (e) => e.id).indexOf(id);
    if (index > -1) {
        users.splice(index, 1);
    }
    saveUsers(users);
}

export async function validateId(id:number) {
    let users = await loadUsers();
    let index = users.map( (e) => e.id).indexOf(id);
    if (index === -1) return true;
    else return false;
}