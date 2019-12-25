// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UpOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpOutlined';

export default {
  name: 'IconUpOutlined',
  displayName: 'UpOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UpOutlinedSvg } },
      children,
    ),
};