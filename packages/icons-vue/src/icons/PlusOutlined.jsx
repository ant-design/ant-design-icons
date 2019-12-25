// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusOutlined';

export default {
  name: 'IconPlusOutlined',
  displayName: 'PlusOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PlusOutlinedSvg } },
      children,
    ),
};