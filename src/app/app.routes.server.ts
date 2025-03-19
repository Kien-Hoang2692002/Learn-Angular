import { inject } from '@angular/core';
import { BlogService } from '../services/BlogService';
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server,  // Thay thế RenderMode bằng chuỗi 'Prerender'
  },
  {
    path: 'detail/:id',
    renderMode: RenderMode.Prerender ,  // Sử dụng prerender cho route có tham số
    async getPrerenderParams(): Promise<Array<Record<string, string>>> {
      const blogService = inject(BlogService);
      const blogs = await blogService.getBlogs().toPromise();  // Lấy dữ liệu blog từ BlogService
      // Kiểm tra blogs và tránh lỗi undefined
      if (blogs && blogs.data) {
        return blogs.data.map((blog: any) => ({ id: blog.id.toString() }));
      }
      return [];  // Nếu không có dữ liệu, trả về mảng rỗng
    }
  },
  {
    path: 'create',
    renderMode: RenderMode.Client, 
  },
  {
    path: 'login',
    renderMode: RenderMode.Client, 
  },
  {
  path: 'love-timeline',
  renderMode: RenderMode.Client, 
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender 
  }
];
