import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products',
        loadChildren: () => import('./products/features/product-shell/product.route'),
    },
    {
        path: 'cart',
        loadChildren: () => import('./cart/cart.route'),
    },
    {
        path: '**', /* Redirect empty or any route to products */
        redirectTo: 'products',
    }
];
