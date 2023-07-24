import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './component/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'estoque',
        loadChildren: () => import('../storage/storage.module').then(m => m.StorageModule)
      },
      {
        path: 'caixa',
        loadChildren: () => import('../cashier/cashier.module').then(m => m.CashierModule)
      },
      {
        path: '',
        redirectTo: '/app/caixa',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/caixa',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/app/caixa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
