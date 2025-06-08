import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Profile
  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }

  updateProfile(profile: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile`, profile);
  }

  // Experience
  getExperiences(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/experience`);
  }

  addExperience(experience: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/experience`, experience);
  }

  updateExperience(id: string, experience: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/experience/${id}`, experience);
  }

  deleteExperience(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/experience/${id}`);
  }

  // Education
  getEducation(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/education`);
  }

  addEducation(education: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/education`, education);
  }

  updateEducation(id: string, education: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/education/${id}`, education);
  }

  deleteEducation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/education/${id}`);
  }

  // Skills
  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/skills`);
  }

  addSkills(skills: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/skills`, skills);
  }

  updateSkills(id: string, skills: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/skills/${id}`, skills);
  }

  deleteSkills(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/skills/${id}`);
  }

  // Contact
  getContact(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contact`);
  }

  updateContact(contact: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/contact`, contact);
  }
} 