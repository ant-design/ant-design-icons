// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HomeTwoToneSvg from '@ant-design/icons-svg/lib/asn/HomeTwoTone';

export default {
  name: 'IconHomeTwoTone',
  displayName: 'HomeTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HomeTwoToneSvg } },
      children,
    ),
};