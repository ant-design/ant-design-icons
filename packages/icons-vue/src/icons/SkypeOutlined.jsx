// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SkypeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkypeOutlined';

export default {
  name: 'IconSkypeOutlined',
  displayName: 'SkypeOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SkypeOutlinedSvg } },
      children,
    ),
};