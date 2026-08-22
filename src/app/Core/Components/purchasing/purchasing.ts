import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


export interface LineItem {
  id: number;
  description: string;
  category: string;
  qty: number;
  price: number;
  taxRate: number;
}

export interface Vendor {
  id: string;
  name: string;
}

@Component({
  selector: 'app-purchasing',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './purchasing.html',
  styleUrl: './purchasing.css',
})





export class Purchasing implements OnInit{

invoiceForm!: FormGroup;
  selectedFile: File | null = null;
  isParsingOcr = false;
  ocrSuccess = false;

  vendors: Vendor[] = [
    { id: '1', name: 'Acme Corp' },
    { id: '2', name: 'Global Logistics' },
    { id: '3', name: 'Cloud Services Inc' }
  ];

  categories = ['Supplies', 'Software/SaaS', 'Travel', 'Hardware'];
  currencies = ['USD', 'EUR', 'GBP'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.addDefaultItems();
  }

  private initForm(): void {
    this.invoiceForm = this.fb.group({
      vendor: ['', Validators.required],
      invoiceNumber: ['', Validators.required],
      issueDate: [new Date().toISOString().split('T')[0], Validators.required],
      dueDate: [''],
      shipping: [0, [Validators.min(0)]],
      discount: [0, [Validators.min(0)]],
      currency: ['USD'],
      paymentStatus: ['Pending'],
      paymentMethod: ['Credit Card'],
      notes: [''],
      lineItems: this.fb.array([])
    });
  }

  get lineItemsArray(): FormArray {
    return this.invoiceForm.get('lineItems') as FormArray;
  }

  createLineItemGroup(item?: Partial<LineItem>): FormGroup {
    return this.fb.group({
      id: [item?.id || Date.now()],
      description: [item?.description || ''],
      category: [item?.category || 'Supplies'],
      qty: [item?.qty ?? 1, [Validators.required, Validators.min(1)]],
      price: [item?.price ?? 0, [Validators.required, Validators.min(0)]],
      taxRate: [item?.taxRate ?? 0, [Validators.min(0)]]
    });
  }

  addLineItem(): void {
    this.lineItemsArray.push(this.createLineItemGroup());
  }

  removeLineItem(index: number): void {
    if (this.lineItemsArray.length > 1) {
      this.lineItemsArray.removeAt(index);
    }
  }

  private addDefaultItems(): void {
    this.lineItemsArray.push(this.createLineItemGroup({
      description: 'Office Supplies & Stationery',
      category: 'Supplies',
      qty: 2,
      price: 45.00,
      taxRate: 8
    }));
    this.lineItemsArray.push(this.createLineItemGroup({
      description: 'Monthly Cloud Infrastructure',
      category: 'Software/SaaS',
      qty: 1,
      price: 250.00,
      taxRate: 0
    }));
  }

  // Financial Calculations
  getItemSubtotal(index: number): number {
    const item = this.lineItemsArray.at(index).value;
    return (item.qty || 0) * (item.price || 0);
  }

  getItemTax(index: number): number {
    const subtotal = this.getItemSubtotal(index);
    const taxRate = this.lineItemsArray.at(index).value.taxRate || 0;
    return subtotal * (taxRate / 100);
  }

  getItemTotal(index: number): number {
    return this.getItemSubtotal(index) + this.getItemTax(index);
  }

  get subtotal(): number {
    return this.lineItemsArray.controls.reduce((acc, _, idx) => acc + this.getItemSubtotal(idx), 0);
  }

  get totalTax(): number {
    return this.lineItemsArray.controls.reduce((acc, _, idx) => acc + this.getItemTax(idx), 0);
  }

  get grandTotal(): number {
    const shipping = this.invoiceForm.get('shipping')?.value || 0;
    const discount = this.invoiceForm.get('discount')?.value || 0;
    return Math.max(0, this.subtotal + this.totalTax + shipping - discount);
  }

  // File Upload & OCR Mock
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  removeFile(): void {
    this.selectedFile = null;
    this.ocrSuccess = false;
  }

  runOcr(): void {
    this.isParsingOcr = true;
    setTimeout(() => {
      this.invoiceForm.patchValue({
        vendor: '1',
        invoiceNumber: 'INV-OCR-2026',
        issueDate: new Date().toISOString().split('T')[0]
      });
      this.isParsingOcr = false;
      this.ocrSuccess = true;
    }, 1200);
  }

  onSubmit(): void {
    if (this.invoiceForm.valid) {
      console.log('Submitted Payload:', {
        ...this.invoiceForm.value,
        subtotal: this.subtotal,
        totalTax: this.totalTax,
        grandTotal: this.grandTotal,
        file: this.selectedFile
      });
      alert('Invoice submitted successfully!');
    } else {
      this.invoiceForm.markAllAsTouched();
    }
  }
}
