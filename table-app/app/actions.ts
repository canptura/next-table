'use server'
import path from 'path';
import fsPromises from 'fs/promises';
import fs from 'fs';
import { revalidatePath } from 'next/cache';

type FieldType = {
    id: number;
    name: string;
    username: string;
}

const dataFile = '/app/user-data.json';

/** Server action: to read user data from json-file. */
export async function loadUsers() {
    let userJson = await fsPromises.readFile(path.join(process.cwd(), dataFile), 'utf-8');
    let users: FieldType[] = await JSON.parse(userJson);
    return users;
}


/** Server action: to save user data to json-file. */
export async function saveUser(user: FieldType) {
    let users = await loadUsers();
    users.push(user);
    saveUsers(users);
}

/** Server action: to write user data to json-file. */
export async function saveUsers(users: FieldType[]) {
    let write = await fs.writeFile(path.join(process.cwd(), dataFile), JSON.stringify(users),()=>{});
    revalidatePath('/');
    return write;
}

/** Server action: to remove a user from user data and saving to json-file. */
export async function removeUser(id: number) {
    let users = await loadUsers();
    let index = users.map( (e) => e.id).indexOf(id);
    if (index > -1) {
        users.splice(index, 1);
    }
    saveUsers(users);
}

/** Server action: to validate user ID for a new entry. */
export async function validateId(id:number) {
    let users = await loadUsers();
    let index = users.map( (e) => e.id).indexOf(id);
    if (index === -1) return true;
    else return false;
}