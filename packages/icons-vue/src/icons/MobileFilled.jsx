
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MobileFillSvg from '@ant-design/icons-svg/lib/fill/MobileFill';

export default {
  name: 'IconMobileFilled',
  displayName: 'MobileFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MobileFillSvg } },
      children
    ),
};
