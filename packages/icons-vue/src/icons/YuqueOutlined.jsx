// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import YuqueOutlinedSvg from '@ant-design/icons-svg/lib/asn/YuqueOutlined';

export default {
  name: 'IconYuqueOutlined',
  displayName: 'YuqueOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: YuqueOutlinedSvg } },
      children,
    ),
};