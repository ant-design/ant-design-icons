import { InjectionKey, Ref, inject, provide, ref } from 'vue';

export interface IconContextProps {
  prefixCls?: Ref<string>;
  rootClassName?: Ref<string>;
  csp?: Ref<{ nonce?: string }>;
}
const contextKey = Symbol('iconContext') as InjectionKey<IconContextProps>;

export const useProvideIconContext = (props: IconContextProps) => {
  provide(contextKey, props);
  return props;
};

export const useInjectIconContext = () => {
  return inject(contextKey, {
    prefixCls: ref('anticon'),
    rootClassName: ref(''),
    csp: ref(),
  });
};
