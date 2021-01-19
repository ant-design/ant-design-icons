import { createContext } from 'react';

export interface IconContextProps {
  prefixCls?: string;
}

const IconContext = createContext<IconContextProps>({});

export default IconContext;
