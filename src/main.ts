import { NgModule } from '@angular/core';
import { AppModule as RootModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic()
  .bootstrapModule(RootModule)
  .catch((err) => {
    console.error(err);
  });
