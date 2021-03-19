import { createContext } from 'react';

export interface IconContextProps {
  prefixCls?: string;
  csp?: { nonce?: string };
}

const IconContext = createContext<IconContextProps>({});

export default IconContext;
