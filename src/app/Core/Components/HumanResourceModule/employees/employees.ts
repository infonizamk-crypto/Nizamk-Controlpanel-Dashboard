import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Employee {
  id: number;
  name: string;
  role: string;
  status: 'Active' | 'On Leave';
  department: string;
  hiredDate: string;
  email: string;
  phone: string;
  img: string;
  highlight?: 'highlight-green' | 'highlight-red' | '';
}

@Component({
  selector: 'app-employees',
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees implements OnInit{
searchTerm: string = '';
  activeTab: 'Employee' | 'Leave Request' = 'Employee';
  
  // Modal State
  isModalOpen: boolean = false;
  selectedFileName: string = 'No file chosen';

  employees: Employee[] = [
    {
      id: 1,
      name: 'Emma Smith',
      role: 'UI/UX Designer',
      status: 'Active',
      department: 'Designing Team',
      hiredDate: '12 Aug 2020',
      email: 'Info@example@mail.com',
      phone: '+01 987 654 3210',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      highlight: ''
    },
    {
      id: 2,
      name: 'William Johnson',
      role: 'Front-End Developer',
      status: 'Active',
      department: 'Designing Team',
      hiredDate: '12 Aug 2020',
      email: 'Info@example@mail.com',
      phone: '+01 987 654 3210',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      highlight: 'highlight-green'
    },
    {
      id: 3,
      name: 'Benjamin Martinez',
      role: 'Web Designer',
      status: 'On Leave',
      department: 'Designing Team',
      hiredDate: '12 Aug 2020',
      email: 'Info@example@mail.com',
      phone: '+01 987 654 3210',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      highlight: ''
    },
    {
      id: 4,
      name: 'Olivia Clark',
      role: 'Data Analyst',
      status: 'Active',
      department: 'Designing Team',
      hiredDate: '12 Aug 2020',
      email: 'Info@example@mail.com',
      phone: '+01 987 654 3210',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      highlight: ''
    },
    {
      id: 5,
      name: 'Ava Lewis',
      role: 'Front-End Developer',
      status: 'On Leave',
      department: 'Designing Team',
      hiredDate: '12 Aug 2020',
      email: 'Info@example@mail.com',
      phone: '+01 987 654 3210',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      highlight: ''
    },
    {
      id: 6,
      name: 'Isabella Walker',
      role: 'UI/UX Designer',
      status: 'On Leave',
      department: 'Designing Team',
      hiredDate: '12 Aug 2020',
      email: 'Info@example@mail.com',
      phone: '+01 987 654 3210',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      highlight: ''
    },
    {
      id: 7,
      name: 'Alexander Brown',
      role: 'Data Analyst',
      status: 'Active',
      department: 'Designing Team',
      hiredDate: '12 Aug 2020',
      email: 'Info@example@mail.com',
      phone: '+01 987 654 3210',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
      highlight: ''
    },
    {
      id: 8,
      name: 'Sophia Hall',
      role: 'Front-End Developer',
      status: 'On Leave',
      department: 'Designing Team',
      hiredDate: '12 Aug 2020',
      email: 'Info@example@mail.com',
      phone: '+01 987 654 3210',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      highlight: 'highlight-red'
    }
  ];

  filteredEmployees: Employee[] = [];

  ngOnInit(): void {
    this.filteredEmployees = this.employees;
  }

  onSearch(): void {
    const query = this.searchTerm.toLowerCase().trim();
    this.filteredEmployees = this.employees.filter(
      emp => emp.name.toLowerCase().includes(query) || emp.role.toLowerCase().includes(query)
    );
  }

  setTab(tab: 'Employee' | 'Leave Request'): void {
    this.activeTab = tab;
  }

  // Modal Handlers
  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedFileName = 'No file chosen';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFileName = input.files[0].name;
    }
  }

  onSubmitEmployee(event: Event): void {
    event.preventDefault();
    // Logic for adding new employee goes here
    this.closeModal();
  }

}
