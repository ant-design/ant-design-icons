// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BarsOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarsOutlined';

export default {
  name: 'IconBarsOutlined',
  displayName: 'BarsOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BarsOutlinedSvg } },
      children,
    ),
};