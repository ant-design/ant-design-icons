// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BugTwoToneSvg from '@ant-design/icons-svg/lib/asn/BugTwoTone';

export default {
  name: 'IconBugTwoTone',
  displayName: 'BugTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BugTwoToneSvg } },
      children,
    ),
};