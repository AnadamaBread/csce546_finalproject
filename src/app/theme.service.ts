// THIS WORKS BUT THE TEXT COLOR WON'T CHANGE

// import { Injectable, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// import { DomController } from '@ionic/angular';

// interface Theme {
//   name: string;
//   styles: ThemeStyle[];
// }

// interface ThemeStyle {
//   themeVariable: string;
//   value: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ThemeService {

//   private themes: Theme[] = [];
//   private currentTheme: number = 0;

//   constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) { 
//     this.themes = [
//       {
//         name: 'day',
//         styles: [
//           { themeVariable: '--ion-color-primary', value: '#f8383a'},
//           { themeVariable: '--ion-color-primary-rgb', value: '248,56,58'},
//           { themeVariable: '--ion-color-primary-contrast', value: '#ffffff'},
//           { themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255'},
//           { themeVariable: '--ion-color-primary-shade', value: '#da3133'},
//           { themeVariable: '--ion-color-primary-tint', value: '#f94c4e'},
//           { themeVariable: '--ion-item-ios-background-color', value: '#ffffff'},
//           { themeVariable: '--ion-item-md-background-color', value: '#ffffff'},
//           { themeVariable: '--ion-tabbar-background-color', value: '#fff'},
//           { themeVariable: '--ion-tabbar-ios-text-color-active', value: '#000000'},
//           { themeVariable: '--ion-tabbar-md-text-color-active', value: '#000000'},
//           { themeVariable: '--ion-background-color', value: '#ffffff'}
//         ]
//       },
//       {
//         name: 'night',
//         styles: [
//           { themeVariable: '--ion-color-primary', value: '#222428'},
//           { themeVariable: '--ion-color-primary-rgb', value: '34,34,34'},
//           { themeVariable: '--ion-color-primary-contrast', value: '#ffffff'},
//           { themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255'},
//           { themeVariable: '--ion-color-primary-shade', value: '#ffffff'},
//           { themeVariable: '--ion-color-primary-tint', value: '#fffff'},
//           { themeVariable: '--ion-item-ios-background-color', value: '#717171'},
//           { themeVariable: '--ion-item-md-background-color', value: '#717171'},
//           { themeVariable: '--ion-tabbar-background-color', value: '#222428'},
//           { themeVariable: '--ion-tabbar-ios-text-color-active', value: '#ffffff'},
//           { themeVariable: '--ion-tabbar-md-text-color-active', value: '#ffffff'},
//           { themeVariable: '--ion-background-color', value: '#383838'}
//         ]
//       }
//     ]
//   }


//   cycleTheme(): void {

//     if(this.themes.length > this.currentTheme + 1){
//       this.currentTheme++;
//     } else {
//       this.currentTheme = 0;
//     }

//     this.setTheme(this.themes[this.currentTheme].name);

//   }

//   setTheme(name): void {

//     let theme = this.themes.find(theme => theme.name === name);

//     this.domCtrl.write(() => {

//       theme.styles.forEach(style => {
//         document.documentElement.style.setProperty(style.themeVariable, style.value);
//       });

//     });

//   }

// }

// ATTEMPTING THIS NOW

import { Inject, Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
  ){
      this.renderer = this.rendererFactory.createRenderer(null,null);
  }

  enableDark(){
      this.renderer.addClass(this.document.body, 'dark-theme');
  }
  enableLight(){
      this.renderer.removeClass(this.document.body, 'dark-theme');
  }
  
}