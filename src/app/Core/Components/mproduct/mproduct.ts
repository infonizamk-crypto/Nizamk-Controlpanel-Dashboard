import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  Productname: string;
  category: string;
  price: number;
  imageUrl?: string;
  selected?: boolean;
  sku?: string;
  cost?: string;
  qty?: string;
  unit?: string;
  description?: string;
}

@Component({
  selector: 'app-mproduct',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mproduct.html',
  styleUrl: './mproduct.css',
})
export class MProduct {

// متغير للتحكم في التنقل بين صفحة العرض وصفحة الإضافة
  isAddingProduct = false;

  products: Product[] = [
    { id: 1, Productname: 'Leather strap Aviators', category: 'Aviator', price: 599.00, imageUrl: 'watchsample.png' },
    { id: 2, Productname: 'Silver Aviators', category: 'Aviator', price: 599.00, imageUrl: 'watchsample.png' },
    { id: 3, Productname: 'Diamond Watchellis', category: 'New arrivals, Watchelli', price: 599.00, imageUrl: 'watchsample.png' },
    { id: 4, Productname: 'Silver Aviators', category: 'Aviator', price: 599.00, imageUrl: 'watchsample.png' },
    { id: 5, Productname: 'Silver Aviators', category: 'Aviator', price: 599.00, imageUrl: 'watchsample.png' },
    { id: 6, Productname: 'Silver Aviators', category: 'Aviator', price: 599.00, imageUrl: 'watchsample.png' },
    { id: 7, Productname: 'Silver Aviators', category: 'Aviator', price: 599.00, imageUrl: 'watchsample.png' },
    { id: 8, Productname: 'Silver Aviators', category: 'Aviator', price: 599.00, imageUrl: 'watchsample.png' },
    { id: 9, Productname: 'Silver Aviators', category: 'Aviator', price: 599.00, imageUrl: 'watchsample.png' },
    
  ];

  newProduct: Partial<Product> = {
    Productname: '',
    category: '',
    price: undefined,
    imageUrl: '',
    sku: '',
    cost: '',
    qty: '',
    unit: '',
    description: ''
  };

  showAddPage() {
    this.isAddingProduct = true;
  }

  showListPage() {
    this.isAddingProduct = false;
    this.resetForm();
  }

  resetForm() {
    this.newProduct = { Productname: '', category: '', price: undefined, imageUrl: '' };
  }

  addProduct() {
    if (!this.newProduct.Productname || !this.newProduct.category || !this.newProduct.price) return;

    this.products.unshift({
      id: Date.now(),
      Productname: this.newProduct.Productname,
      category: this.newProduct.category,
      price: Number(this.newProduct.price),
      imageUrl: this.newProduct.imageUrl || 'https://via.placeholder.com/48'
    });

    this.showListPage();
  }
  removeProduct(productId: number) {
      this.products = this.products.filter(item => item.id !== productId);
    }
    
}














  /*
  // حالة فتح/إغلاق الشباك المنبثق
  isModalOpen = false;

  // القائمة المبدئية للمنتجات
  products: Product[] = [
    { id: 1, title: 'Leather strap Aviators', category: 'Aviator', price: 599.00, imageUrl: 'https://via.placeholder.com/48' },
    { id: 2, title: 'Silver Aviators', category: 'Aviator', price: 599.00, imageUrl: 'https://via.placeholder.com/48' },
    { id: 3, title: 'Diamond Watchellis', category: 'New arrivals, Watchelli', price: 599.00, imageUrl: 'https://via.placeholder.com/48' }
  ];

  // نموذج المنتج الجديد
  newProduct: Partial<Product> = {
    title: '',
    category: '',
    price: undefined,
    imageUrl: ''
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetForm();
  }

  resetForm() {
    this.newProduct = { title: '', category: '', price: undefined, imageUrl: '' };
  }

  addProduct() {
    if (!this.newProduct.title || !this.newProduct.category || !this.newProduct.price) return;

    this.products.unshift({
      id: Date.now(),
      title: this.newProduct.title,
      category: this.newProduct.category,
      price: Number(this.newProduct.price),
      imageUrl: this.newProduct.imageUrl || 'https://via.placeholder.com/48'
    });

    this.closeModal();
  }*/