
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TwitterCircleFillSvg from '@ant-design/icons-svg/lib/fill/TwitterCircleFill';

export default {
  name: 'TwitterCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TwitterCircleFillSvg } },
      children
    ),
};
