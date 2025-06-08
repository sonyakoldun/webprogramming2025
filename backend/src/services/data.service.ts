import fs from 'fs';
import path from 'path';
import { UsersData } from '../models/user';

export class DataService {
  private dataDir: string;

  constructor() {
    this.dataDir = path.join(__dirname, '../data');
    this.initializeDataFiles();
  }

  private initializeDataFiles() {
    const files = [
      'profile.json',
      'experience.json',
      'education.json',
      'skills.json',
      'contact.json',
      'users.json'
    ];
    
    files.forEach(file => {
      const filePath = path.join(this.dataDir, file);
      if (!fs.existsSync(filePath)) {
        // Initialize users.json with empty users array
        if (file === 'users.json') {
          fs.writeFileSync(filePath, JSON.stringify({ users: [] }, null, 2));
        } else {
          fs.writeFileSync(filePath, JSON.stringify([], null, 2));
        }
      }
    });
  }

  async readData(fileName: string): Promise<any> {
    try {
      const filePath = path.join(this.dataDir, fileName);
      const data = await fs.promises.readFile(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading ${fileName}:`, error);
      if (fileName === 'users.json') {
        return { users: [] };
      }
      return [];
    }
  }

  async writeData(fileName: string, data: any): Promise<void> {
    try {
      const filePath = path.join(this.dataDir, fileName);
      await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(`Error writing to ${fileName}:`, error);
      throw error;
    }
  }

  async addItem(fileName: string, item: any): Promise<any> {
    const data = await this.readData(fileName);
    const newItem = { ...item, id: Date.now().toString() };
    
    if (fileName === 'users.json') {
      const usersData = data as UsersData;
      usersData.users.push(newItem);
      await this.writeData(fileName, usersData);
    } else {
      data.push(newItem);
      await this.writeData(fileName, data);
    }
    
    return newItem;
  }

  async updateItem(fileName: string, id: string, updates: any): Promise<any> {
    const data = await this.readData(fileName);
    
    if (fileName === 'users.json') {
      const usersData = data as UsersData;
      const index = usersData.users.findIndex(item => item.id === id);
      if (index === -1) return null;
      
      usersData.users[index] = { ...usersData.users[index], ...updates };
      await this.writeData(fileName, usersData);
      return usersData.users[index];
    } else {
      const index = data.findIndex(item => item.id === id);
      if (index === -1) return null;
      
      data[index] = { ...data[index], ...updates };
      await this.writeData(fileName, data);
      return data[index];
    }
  }

  async deleteItem(fileName: string, id: string): Promise<boolean> {
    const data = await this.readData(fileName);
    
    if (fileName === 'users.json') {
      const usersData = data as UsersData;
      const filteredUsers = usersData.users.filter(item => item.id !== id);
      if (filteredUsers.length === usersData.users.length) return false;
      
      usersData.users = filteredUsers;
      await this.writeData(fileName, usersData);
      return true;
    } else {
      const filteredData = data.filter(item => item.id !== id);
      if (filteredData.length === data.length) return false;
      
      await this.writeData(fileName, filteredData);
      return true;
    }
  }
} 