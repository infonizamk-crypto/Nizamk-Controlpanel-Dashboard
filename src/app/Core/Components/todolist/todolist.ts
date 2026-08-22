import { Component } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todolist',
  imports: [],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css',
})
export class Todolist {

  newTaskTitle: string = '';

  // قائمة المهام الافتراضية
  tasks: Task[] = [
    { id: 1, title: 'Review Angular components layout', completed: false },
    { id: 2, title: 'Update API endpoints for users', completed: false },
    { id: 3, title: 'Check server log errors', completed: true }
  ];

  // حساب عدد المهام المعلقة تلقائياً
  get pendingCount(): number {
    return this.tasks.filter(t => !t.completed).length;
  }

  // إضافة مهمة جديدة
  addTask(): void {
    if (!this.newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: this.newTaskTitle.trim(),
      completed: false
    };

    this.tasks.push(newTask);
    this.newTaskTitle = ''; // تفريغ حقل الإدخال
  }

  addTask2(title: string): void {
  if (!title.trim()) return;

  const newTask: Task = {
    id: Date.now(),
    title: title.trim(),
    completed: false
  };

  this.tasks.push(newTask);
}

  // تبديل حالة المهمة (مكتملة / غير مكتملة)
  toggleTask(task: Task): void {
    task.completed = !task.completed;
  }

  // حذف مهمة
  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }
}
