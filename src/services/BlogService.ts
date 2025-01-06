import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseData } from "../app/shared/types/responseData";
import { ProductItem, BlogItem } from "../app/shared/types/product-item";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BlogService {

    constructor(private http: HttpClient){
    }

    getBlogs(): Observable<ResponseData<ProductItem[]>> {
        return this.http.get<any>(`https://ninedev-api.vercel.app/blogs`);
    }

    detailBlog(id: number): Observable<ResponseData<ProductItem>> {
        return this.http.get<any>(`https://ninedev-api.vercel.app/blogs/${id}`);
    }

    createBlog(blogItem: BlogItem): Observable<ResponseData<ProductItem>> {
        return this.http.post<any>(`https://ninedev-api.vercel.app/blogs`, blogItem);
    }

    deleteBlog(id: number): Observable<ResponseData<ProductItem>> {
        return this.http.delete<any>(`https://ninedev-api.vercel.app/blogs/${id}`);
    }

    

}