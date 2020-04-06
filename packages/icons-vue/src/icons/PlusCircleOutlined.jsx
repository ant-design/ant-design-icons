// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlusCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusCircleOutlined';

export default {
  name: 'IconPlusCircleOutlined',
  displayName: 'PlusCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PlusCircleOutlinedSvg } },
      children,
    ),
};