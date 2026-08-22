import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homepage } from "./Core/Components/homepage/homepage";
import { Navbar } from './Core/Components/navbar/navbar';
import { Sidebar } from './Core/Components/sidebar/sidebar';
import { Footer } from "./Core/Components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Nizamk_Dashboard_V1');
}
