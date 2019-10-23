
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ChromeFillSvg from '@ant-design/icons-svg/lib/fill/ChromeFill';

export default {
  name: 'IconChromeFilled',
  displayName: 'ChromeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ChromeFillSvg } },
      children
    ),
};
