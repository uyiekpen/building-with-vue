// src/types/index.ts
export interface Order {
    id: string;
    date: number; // UNIX timestamp
    customer: string;
    status: number;
    paymentMethod: string;
    paymentIdentifier: string;
    totalAmount: number;
  }

  export interface ProductSold {
    id: string;
      name: string;
      img: string;
      sold: number;
  }
  
  export interface SalesDashboardData {
    statisticData: {
      revenue: { value: number; growShrink: number; };
      orders: { value: number; growShrink: number; };
      purchases: { value: number; growShrink: number; };
    };
    salesReportData: {
      series: Array<{ name: string; data: number[]; }>;
      categories: string[];
    };
    topProductsData: ProductSold[];
    latestOrderData: Order[];
    salesByCategoriesData: {
      labels: string[];
      data: number[];
    };
  }
  
  export interface Product {
    id: string;
    name: string;
    productCode: string;
    img: string;
    imgList: Array<{ id: string; name: string; img: string; }>;
    category: string;
    price: number;
    stock: number;
    status: number;
    costPerItem: number;
    bulkDiscountPrice: number;
    taxRate: number;
    tags: string[];
    brand: string;
    vendor: string;
    description: string;
  }
  