// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import IdcardTwoToneSvg from '@ant-design/icons-svg/lib/asn/IdcardTwoTone';

export default {
  name: 'IconIdcardTwoTone',
  displayName: 'IdcardTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: IdcardTwoToneSvg } },
      children,
    ),
};