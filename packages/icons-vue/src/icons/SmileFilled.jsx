
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SmileFillSvg from '@ant-design/icons-svg/lib/fill/SmileFill';

export default {
  name: 'IconSmileFilled',
  displayName: 'SmileFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SmileFillSvg } },
      children
    ),
};
