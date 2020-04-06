// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import IdcardFilledSvg from '@ant-design/icons-svg/lib/asn/IdcardFilled';

export default {
  name: 'IconIdcardFilled',
  displayName: 'IdcardFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: IdcardFilledSvg } },
      children,
    ),
};