import api from '../config/api';

// Auth Services
export const authService = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    // Backend returns data nested in response.data.data
    const { data } = response.data;
    if (data && data.token) {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify({
        userId: data.userId,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role
      }));
    }
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },
};

// Product Services
export const productService = {
  getAll: async () => {
    const response = await api.get('/products');
    return response?.data?.data || [];
  },

  getById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response?.data?.data;
  },

  create: async (productData) => {
    const response = await api.post('/products', productData);
    return response?.data;
  },

  update: async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData);
    return response?.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response?.data;
  },

  search: async (searchTerm) => {
    const response = await api.get(`/products/search?query=${searchTerm}`);
    return response?.data?.data || [];
  },

  getLowStock: async () => {
    const response = await api.get('/products/low-stock');
    return response?.data?.data || [];
  },
};

// Sale Services
export const saleService = {
  getAll: async () => {
    const response = await api.get('/sales');
    return response?.data?.data || [];
  },

  getById: async (id) => {
    const response = await api.get(`/sales/${id}`);
    return response?.data?.data;
  },

  create: async (saleData) => {
    const response = await api.post('/sales', saleData);
    return response?.data;
  },

  update: async (id, saleData) => {
    const response = await api.put(`/sales/${id}`, saleData);
    return response?.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/sales/${id}`);
    return response?.data;
  },

  getToday: async () => {
    const response = await api.get('/sales/today');
    return response?.data?.data || [];
  },

  getTotalRevenue: async () => {
    const response = await api.get('/sales/revenue');
    return response?.data?.data;
  },
};

// Draft Services (Drafts are sales with status = DRAFT)
export const draftService = {
  getAll: async () => {
    const response = await api.get('/sales');
    // Filter only drafts on frontend
    const allSales = response?.data?.data || [];
    return allSales.filter(sale => sale.status === 'DRAFT');
  },

  getById: async (id) => {
    const response = await api.get(`/sales/${id}`);
    return response?.data?.data;
  },

  create: async (draftData) => {
    // Set status to DRAFT
    const response = await api.post('/sales', {
      ...draftData,
      status: 'DRAFT'
    });
    return response?.data;
  },

  update: async (id, draftData) => {
    const response = await api.put(`/sales/${id}`, {
      ...draftData,
      status: 'DRAFT'
    });
    return response?.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/sales/${id}`);
    return response?.data;
  },

  convertToSale: async (id, saleData) => {
    // Update draft status to COMPLETED
    const response = await api.put(`/sales/${id}`, {
      ...saleData,
      status: 'COMPLETED'
    });
    return response?.data;
  },
};

// Quotation Services (Quotations are sales with specific marker)
export const quotationService = {
  getAll: async () => {
    const response = await api.get('/sales');
    // Filter quotations (drafts with quotation marker)
    const allSales = response?.data?.data || [];
    return allSales.filter(sale => 
      sale.status === 'DRAFT' && sale.notes?.includes('[QUOTATION]')
    );
  },

  getById: async (id) => {
    const response = await api.get(`/sales/${id}`);
    return response?.data?.data;
  },

  create: async (quotationData) => {
    // Note: quotationData.notes should already contain [QUOTATION] marker
    const response = await api.post('/sales', {
      ...quotationData,
      status: 'DRAFT'
    });
    return response?.data;
  },

  update: async (id, quotationData) => {
    // Note: quotationData.notes should already contain [QUOTATION] marker
    const response = await api.put(`/sales/${id}`, {
      ...quotationData,
      status: 'DRAFT'
    });
    return response?.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/sales/${id}`);
    return response?.data;
  },

  convertToSale: async (id, saleData) => {
    // Remove quotation marker and set status to COMPLETED
    const notes = saleData.notes?.replace('[QUOTATION]', '').trim();
    const response = await api.put(`/sales/${id}`, {
      ...saleData,
      status: 'COMPLETED',
      notes
    });
    return response?.data;
  },
};

// Customer Services
export const customerService = {
  getAll: async () => {
    const response = await api.get('/customers');
    return response?.data?.data || [];
  },

  getById: async (id) => {
    const response = await api.get(`/customers/${id}`);
    return response?.data?.data;
  },

  create: async (customerData) => {
    const response = await api.post('/customers', customerData);
    return response?.data;
  },

  update: async (id, customerData) => {
    const response = await api.put(`/customers/${id}`, customerData);
    return response?.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/customers/${id}`);
    return response?.data;
  },

  search: async (searchTerm) => {
    const response = await api.get(`/customers/search?query=${searchTerm}`);
    return response?.data?.data || [];
  },
};

// Supplier Services
export const supplierService = {
  getAll: async () => {
    const response = await api.get('/suppliers');
    return response?.data?.data || [];
  },

  getById: async (id) => {
    const response = await api.get(`/suppliers/${id}`);
    return response?.data?.data;
  },

  create: async (supplierData) => {
    const response = await api.post('/suppliers', supplierData);
    return response?.data;
  },

  update: async (id, supplierData) => {
    const response = await api.put(`/suppliers/${id}`, supplierData);
    return response?.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/suppliers/${id}`);
    return response?.data;
  },
};

// Purchase Services
export const purchaseService = {
  getAll: async () => {
    const response = await api.get('/purchases');
    return response?.data?.data || [];
  },

  getById: async (id) => {
    const response = await api.get(`/purchases/${id}`);
    return response?.data?.data;
  },

  create: async (purchaseData) => {
    const response = await api.post('/purchases', purchaseData);
    return response?.data;
  },

  update: async (id, purchaseData) => {
    const response = await api.put(`/purchases/${id}`, purchaseData);
    return response?.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/purchases/${id}`);
    return response?.data;
  },
};

// Category Services
export const categoryService = {
  getAll: async () => {
    const response = await api.get('/categories');
    console.log('categoryService.getAll - Raw response:', response);
    console.log('categoryService.getAll - response.data:', response.data);
    return response.data; // Return response.data (ApiResponse object)
  },

  getById: async (id) => {
    const response = await api.get(`/categories/${id}`);
    return response?.data?.data;
  },

  create: async (categoryData) => {
    console.log('categoryService.create - Sending data:', categoryData);
    const response = await api.post('/categories', categoryData);
    console.log('categoryService.create - Response:', response);
    return response?.data;
  },

  update: async (id, categoryData) => {
    const response = await api.put(`/categories/${id}`, categoryData);
    return response?.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/categories/${id}`);
    return response?.data;
  },
};

// Brand Services
export const brandService = {
  getAll: async () => {
    const response = await api.get('/brands');
    console.log('brandService.getAll - Raw response:', response);
    console.log('brandService.getAll - response.data:', response.data);
    console.log('brandService.getAll - response.data.data:', response.data.data);
    // Backend returns: { success: true, message: "...", data: [...] }
    // So we need response.data.data to get the actual brands array
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/brands/${id}`);
    return response?.data?.data;
  },

  create: async (brandData) => {
    console.log('brandService.create - Sending data:', brandData);
    console.log('brandService.create - JSON:', JSON.stringify(brandData));
    const response = await api.post('/brands', brandData);
    console.log('brandService.create - Response:', response);
    return response?.data;
  },

  update: async (id, brandData) => {
    const response = await api.put(`/brands/${id}`, brandData);
    return response?.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/brands/${id}`);
    return response?.data;
  },
};

// Expense Services
export const expenseService = {
  getAll: async () => {
    const response = await api.get('/expenses');
    return response?.data?.data || [];
  },

  getById: async (id) => {
    const response = await api.get(`/expenses/${id}`);
    return response?.data?.data;
  },

  create: async (expenseData) => {
    const response = await api.post('/expenses', expenseData);
    return response?.data;
  },

  update: async (id, expenseData) => {
    const response = await api.put(`/expenses/${id}`, expenseData);
    return response?.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/expenses/${id}`);
    return response?.data;
  },

  getTotalExpenses: async () => {
    const response = await api.get('/expenses/total');
    return response?.data?.data;
  },
};

// Dashboard Statistics
export const dashboardService = {
  getStatistics: async () => {
    const response = await api.get('/dashboard/statistics');
    return response?.data?.data;
  },

  getRecentSales: async () => {
    const response = await api.get('/dashboard/recent-sales');
    return response?.data?.data || [];
  },

  getTopProducts: async () => {
    const response = await api.get('/dashboard/top-products');
    return response?.data?.data || [];
  },
};

// Notification Services
export const notificationService = {
  getAll: async () => {
    const response = await api.get('/notifications');
    return response?.data?.data || [];
  },

  getUnread: async () => {
    const response = await api.get('/notifications/unread');
    return response?.data?.data || [];
  },

  markAsRead: async (id) => {
    const response = await api.put(`/notifications/${id}/read`);
    return response?.data;
  },

  markAllAsRead: async () => {
    const response = await api.put('/notifications/mark-all-read');
    return response?.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/notifications/${id}`);
    return response?.data;
  },

  getCount: async () => {
    const response = await api.get('/notifications/count');
    return response?.data?.data;
  },
};
