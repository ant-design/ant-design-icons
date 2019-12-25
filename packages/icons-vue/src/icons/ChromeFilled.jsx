// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ChromeFilledSvg from '@ant-design/icons-svg/lib/asn/ChromeFilled';

export default {
  name: 'IconChromeFilled',
  displayName: 'ChromeFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ChromeFilledSvg } },
      children,
    ),
};