import { Routes } from '@angular/router';
import { Homepage } from './Core/Components/homepage/homepage';
import { Theme } from './Core/Components/theme/theme';
import { Todolist } from './Core/Components/todolist/todolist';
import { OrderPage } from './Core/Components/Odm/order-page/order-page';
import { AddRemoveItem } from './Core/Components/StorageManagement/add-remove-item/add-remove-item';
import { StoreAnalytics as Footer } from './Core/Components/StorageManagement/store-analytics/store-analytics';
import { StoreOperation } from './Core/Components/StorageManagement/store-operation/store-operation';
import { Navbar } from './Core/Components/navbar/navbar';
import { Sidebar } from './Core/Components/sidebar/sidebar';
import { MProduct } from './Core/Components/mproduct/mproduct';
import { ChatPage } from './Core/Components/chat-page/chat-page';
import { Employees } from './Core/Components/HumanResourceModule/employees/employees';
import { Purchasing } from './Core/Components/purchasing/purchasing';

export const routes: Routes = [
    {
        redirectTo: 'dashboard/home',
        path: '',
        pathMatch: 'full',
    },
    {
        path: 'dashboard/navbar',
        component: Navbar
    },
    {
        path: 'dashboard/sidebar',
        component: Sidebar
    },
    {
        path: 'dashboard/home',
        component: Homepage
    },
    {
        path: 'dashboard/theme',
        component: Theme
    },
    {
        path: 'dashboard/todolist',
        component: Todolist
    },
    {
        path: 'dashboard/order',
        component: OrderPage
    },
    {
        path: 'dashboard/AddRemoveItem',
        component: AddRemoveItem
    },
    {
        path: 'dashboard/StoreOperation',
        component: StoreOperation
    },
    {
        path: 'dashboard/StoreAnalytics',
        component: Footer
    },
    {
        path: 'dashboard/footer',
        component: Footer
    },
    {
        path: 'dashboard/product',
        component: MProduct
    },
    {
        path: 'dashboard/chat',
        component: ChatPage
    },
    {
        path: 'dashboard/Employees',
        component: Employees
    },
    {
        path: 'dashboard/purchasing',
        component: Purchasing
    },
];
