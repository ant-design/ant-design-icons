import { RouteComponentProps } from 'react-router';

export interface PageProps<P, R> extends RouteComponentProps<P, R> {
  data: any;
  pageData: any;
}
