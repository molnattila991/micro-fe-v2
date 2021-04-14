import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IApiService<T> {
    getAll(): Observable<T[]>;
    getAllFiltered(text: string): Observable<T[]>;
    create(item: T): Observable<T>;
    update(item: T): Observable<T>;
    delete(id: number): Observable<void>
}

export abstract class ApiService<T> implements IApiService<T> {
    constructor(protected http: HttpClient, protected api: string) {

    }

    getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.api);
    }

    getAllFiltered(text: string): Observable<T[]> {
        return this.http.post<T[]>(
            this.api + "/filter",
            { text }
        );
    }

    create(item: T): Observable<T> {
        return this.http.post<T>(
            this.api,
            item
        );
    }

    update(item: T): Observable<T> {
        return this.http.put<T>(
            this.api,
            item
        );
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(this.api + "/" + id);
    }
}