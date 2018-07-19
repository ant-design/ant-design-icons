import { IconDefinition } from '@ant-design/icons';

export function log(message: string) {
  if (!(process && process.env && process.env.NODE_ENV === 'production')) {
    console.error(`[@ant-design/icons-react]: ${message}.`);
  }
}

export function isIconDefinition(target: any): target is IconDefinition {
  return typeof target === 'object' && target.name && target.width && Array.isArray(target.children);
}
