import { createContext } from 'react';

export interface IconContextProps {
  prefixCls?: string;
  csp?: string;
}

const IconContext = createContext<IconContextProps>({});

export default IconContext;
