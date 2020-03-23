// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BugFilledSvg from '@ant-design/icons-svg/lib/asn/BugFilled';

export default {
  name: 'IconBugFilled',
  displayName: 'BugFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BugFilledSvg } },
      children,
    ),
};