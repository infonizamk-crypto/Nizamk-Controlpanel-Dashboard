import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Order {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
}


@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-page.html',
  styleUrl: './order-page.css',
})
export class OrderPage {

order: Order[] = [
    { id: '#123456', name: 'John', position: 'Pediatrician', department: 'Pediatrician', email: 'John@gmail.com', phone: '+1 256 259 458' },
    { id: '#458789', name: 'Emily', position: 'Nurse', department: 'Nurse', email: 'Emily@gmail.com', phone: '+1 452 759 369' },
    { id: '#845324', name: 'Alex', position: 'Engineer', department: 'Engineer', email: 'Alex@gmail.com', phone: '+1 256 325 458' },
    { id: '#489567', name: 'Martin', position: 'Designer', department: 'Designer', email: 'Martin@gmail.com', phone: '+1 965 259 475' },
    { id: '#921574', name: 'Sophia', position: 'Cardiologist', department: 'Cardiologist', email: 'Sophia@gmail.com', phone: '+1 148 259 421' }
  ];

}
