import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suit } from '../model/suit';
import { environment } from '../../../environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class SpacesuitApi {
    apiURL: string = environment.apiURL + "/spacesuits";

    constructor(private http: HttpClient) { }

    // Create a new Suit
    create(Suit: Suit): Observable<Suit> {
        return this.http.post<Suit>(this.apiURL, Suit);
    }

    // Get all Suits
    getAll(): Observable<Suit[]> {
        return this.http.get<Suit[]>(this.apiURL);
    }

    // Get a single Suit by ID
    getById(id: string): Observable<Suit> {
        return this.http.get<Suit>(`${this.apiURL}/${id}`);
    }
    // Validate that this suit can go on a mission to Mars !
    validate(id: string): Observable<Suit> {
        return this.http.post<Suit>(`${this.apiURL}/${id}/validate`, {});
    }

    // Update a Suit
    update(id: string, Suit: Suit): Observable<Suit> {
        return this.http.put<Suit>(`${this.apiURL}/${id}`, Suit);
    }

    // Delete a Suit
    delete(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }
}