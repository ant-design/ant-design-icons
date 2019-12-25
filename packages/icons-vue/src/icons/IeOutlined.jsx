// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import IeOutlinedSvg from '@ant-design/icons-svg/lib/asn/IeOutlined';

export default {
  name: 'IconIeOutlined',
  displayName: 'IeOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: IeOutlinedSvg } },
      children,
    ),
};