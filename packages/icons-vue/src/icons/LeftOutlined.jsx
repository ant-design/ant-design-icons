// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined';

export default {
  name: 'IconLeftOutlined',
  displayName: 'LeftOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LeftOutlinedSvg } },
      children,
    ),
};