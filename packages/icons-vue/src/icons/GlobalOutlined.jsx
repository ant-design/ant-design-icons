// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GlobalOutlinedSvg from '@ant-design/icons-svg/lib/asn/GlobalOutlined';

export default {
  name: 'IconGlobalOutlined',
  displayName: 'GlobalOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GlobalOutlinedSvg } },
      children,
    ),
};