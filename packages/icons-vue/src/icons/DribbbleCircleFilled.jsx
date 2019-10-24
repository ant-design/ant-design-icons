
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DribbbleCircleFillSvg from '@ant-design/icons-svg/lib/fill/DribbbleCircleFill';

export default {
  name: 'IconDribbbleCircleFilled',
  displayName: 'DribbbleCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DribbbleCircleFillSvg } },
      children
    ),
};
