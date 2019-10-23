
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RadiusUprightOutlineSvg from '@ant-design/icons-svg/lib/outline/RadiusUprightOutline';

export default {
  name: 'IconRadiusUpright',
  displayName: 'RadiusUpright',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RadiusUprightOutlineSvg } },
      children
    ),
};
