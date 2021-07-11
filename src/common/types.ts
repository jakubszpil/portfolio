export interface Route {
  id: string;
  path: string;
  name: string;
}

export type RouteLabel =
  | 'HOME'
  | 'ABOUT'
  | 'PORTFOLIO'
  | 'BLOG'
  | 'CATEGORIES'
  | 'CONTACT'
  | 'TERMS';
