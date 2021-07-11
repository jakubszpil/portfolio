import { v4 as uuidv4 } from 'uuid';
import { Route, RouteLabel } from '../common/types';

const generateRoute = (name: string, path: string): Route => ({
  id: uuidv4(),
  name,
  path,
});

export const routes: Record<RouteLabel, Route> = {
  HOME: generateRoute('Strona główna', '/'),
  PORTFOLIO: generateRoute('Portfolio', '/portfolio'),
  BLOG: generateRoute('Blog', '/blog'),
  CATEGORIES: generateRoute('Kategorie', '/blog/kategorie'),
  TERMS: generateRoute('Regulamin', '/regulamin'),
  CONTACT: generateRoute('Kontakt', '/kontakt'),
  ABOUT: generateRoute('O mnie', '/o-mnie'),
};

export const links: Route[] = [
  routes.HOME,
  routes.PORTFOLIO,
  routes.BLOG,
  routes.ABOUT,
  routes.CONTACT,
];
