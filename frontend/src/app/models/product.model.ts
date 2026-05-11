export interface Product {
  id: number;
  name: string;
  description?: string;
  category: string;
  quantity: number;
  price: number;
  minStock: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProduct {
  name: string;
  description?: string;
  category: string;
  quantity: number;
  price: number;
  minStock: number;
}

export interface UpdateProduct {
  name: string;
  description?: string;
  category: string;
  quantity: number;
  price: number;
  minStock: number;
}

export interface DashboardStats {
  totalProducts: number;
  totalItems: number;
  totalValue: number;
  lowStockCount: number;
  outOfStockCount: number;
  categories: number;
}
