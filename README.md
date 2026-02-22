# AngularPractice

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.








































keyvalue.config


export interface KeyValueConfig {
  key: string;
  value: string | number;

  valueType?: 'text' | 'link' | 'number' | 'route';

  keyStyle?: StyleConfig;
  valueStyle?: StyleConfig;

  startIcon?: string;
  endIcon?: string;

  startIconStyle?: IconStyleConfig;
  endIconStyle?: IconStyleConfig;

  linkUrl?: string;
  linkRoute?: string[];

  layout?: 'row' | 'column';
  gap?: string;
  align?: 'start' | 'center' | 'end';
}

export interface StyleConfig {
  color?: string;
  fontSize?: string;
  fontWeight?: 'normal' | 'bold' | number;
  fontFamily?: string;
}

export interface IconStyleConfig {
  color?: string;
  fontSize?: string;
}

export const DEFAULT_KEY_VALUE_CONFIG: Partial<KeyValueConfig> = {
  valueType: 'text',
  layout: 'row',
  gap: '8px',
  align: 'start',
  keyStyle: {
    color: '#333',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  valueStyle: {
    color: '#666',
    fontSize: '14px',
    fontWeight: 'normal',
  },
  startIconStyle: {
    color: '#666',
    fontSize: '16px',
  },
  endIconStyle: {
    color: '#666',
    fontSize: '16px',
  },
};










keyvalue.ts

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  KeyValueConfig,
  DEFAULT_KEY_VALUE_CONFIG
} from './key-value.config';

@Component({
  selector: 'app-key-value',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './key-value.html',
  styleUrl: './key-value.css'
})
export class KeyValueComponent {
  private _config!: KeyValueConfig;

  @Input({ required: true })
  set config(value: KeyValueConfig) {
    this._config = {
      ...DEFAULT_KEY_VALUE_CONFIG,
      ...value,
      keyStyle: { ...DEFAULT_KEY_VALUE_CONFIG.keyStyle, ...value.keyStyle },
      valueStyle: { ...DEFAULT_KEY_VALUE_CONFIG.valueStyle, ...value.valueStyle }
    };
  }

  get config(): KeyValueConfig {
    return this._config;
  }
}




keyvalue.html

<div 
  class="flex items-center flex-wrap"
  [ngClass]="{
    'flex-col': config.layout === 'column',
    'flex-row': config.layout !== 'column',
    'items-start': config.align === 'start',
    'items-center': config.align === 'center',
    'items-end': config.align === 'end'
  }"
  [ngStyle]="{'gap': config.gap}">
  
  <!-- Start Icon -->
  @if (config.startIcon) {
    <span 
      class="inline-flex items-center justify-center mr-1"
      [ngStyle]="{
        'color': config.startIconStyle?.color,
        'font-size': config.startIconStyle?.fontSize
      }">
      {{ config.startIcon }}
    </span>
  }

  <!-- Key -->
  <span 
    class="font-semibold"
    [ngStyle]="{
      'color': config.keyStyle?.color,
      'font-size': config.keyStyle?.fontSize,
      'font-weight': config.keyStyle?.fontWeight,
      'font-family': config.keyStyle?.fontFamily
    }">
    {{ config.key }}
  </span>

  <!-- Value -->
  @if (config.valueType === 'link' && config.linkUrl) {
    <a 
      [href]="config.linkUrl" 
      class="break-words no-underline cursor-pointer transition-opacity duration-200 hover:opacity-80 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      [ngStyle]="{
        'color': config.valueStyle?.color,
        'font-size': config.valueStyle?.fontSize,
        'font-weight': config.valueStyle?.fontWeight,
        'font-family': config.valueStyle?.fontFamily
      }">
      {{ config.value }}
    </a>
  } @else if (config.valueType === 'route' && config.linkRoute) {
    <a 
      [routerLink]="config.linkRoute" 
      class="break-words no-underline cursor-pointer transition-opacity duration-200 hover:opacity-80 hover:underline"
      [ngStyle]="{
        'color': config.valueStyle?.color,
        'font-size': config.valueStyle?.fontSize,
        'font-weight': config.valueStyle?.fontWeight,
        'font-family': config.valueStyle?.fontFamily
      }">
      {{ config.value }}
    </a>
  } @else {
    <span 
      class="break-words"
      [ngStyle]="{
        'color': config.valueStyle?.color,
        'font-size': config.valueStyle?.fontSize,
        'font-weight': config.valueStyle?.fontWeight,
        'font-family': config.valueStyle?.fontFamily
      }">
      {{ config.value }}
    </span>
  }

  <!-- End Icon -->
  @if (config.endIcon) {
    <span 
      class="inline-flex items-center justify-center ml-1"
      [ngStyle]="{
        'color': config.endIconStyle?.color,
        'font-size': config.endIconStyle?.fontSize
      }">
      {{ config.endIcon }}
    </span>
  }
</div>

