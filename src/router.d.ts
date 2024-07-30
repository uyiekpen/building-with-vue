import { RouteRecordRaw } from 'vue-router';

declare module 'vue-router' {
  export interface RouteRecordRaw {
    path: string;
    name?: string;
    component?: any;
    children?: RouteRecordRaw[];
  }
}
