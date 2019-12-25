// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AndroidOutlinedSvg from '@ant-design/icons-svg/lib/asn/AndroidOutlined';

export default {
  name: 'IconAndroidOutlined',
  displayName: 'AndroidOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AndroidOutlinedSvg } },
      children,
    ),
};