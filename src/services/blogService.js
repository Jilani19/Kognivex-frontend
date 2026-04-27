import api from './api';

const blogService = {
  fetchBlogs: async () => {
    const response = await api.get('/blogs');
    return response.data?.data;
  },
  fetchAllBlogs: async () => {
    const response = await api.get('/blogs');
    return response.data?.data;
  },
  fetchBlogBySlug: async (slug) => {
    const response = await api.get(`/blogs/${slug}`);
    return response.data?.data;
  },
  fetchBlogBySlugAdmin: async (slug) => {
    const response = await api.get(`/blogs/${slug}`);
    return response.data?.data;
  },
  createBlog: async (blog) => {
    const response = await api.post('/blogs', blog);
    return response.data?.data;
  },
  updateBlog: async (id, blog) => {
    const formData = new FormData();
    if (blog.title !== undefined) formData.append('title', blog.title);
    if (blog.excerpt !== undefined) formData.append('excerpt', blog.excerpt);
    if (blog.content !== undefined) formData.append('content', blog.content);
    if (blog.status !== undefined) formData.append('status', blog.status);
    if (blog.category !== undefined) formData.append('category', blog.category);
    if (blog.author !== undefined) formData.append('author', blog.author);
    if (blog.featuredImage) formData.append('featuredImage', blog.featuredImage);

    const response = await api.put(`/blogs/${id}`, formData);
    return response.data?.data;
  },
  deleteBlog: async (id) => {
    const response = await api.delete(`/blogs/${id}`);
    return response.data;
  }
};

export default blogService;
