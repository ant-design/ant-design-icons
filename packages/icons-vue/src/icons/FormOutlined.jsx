// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FormOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormOutlined';

export default {
  name: 'IconFormOutlined',
  displayName: 'FormOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FormOutlinedSvg } },
      children,
    ),
};