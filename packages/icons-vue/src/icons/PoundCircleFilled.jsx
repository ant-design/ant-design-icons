
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PoundCircleFillSvg from '@ant-design/icons-svg/lib/fill/PoundCircleFill';

export default {
  name: 'IconPoundCircleFilled',
  displayName: 'PoundCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PoundCircleFillSvg } },
      children
    ),
};
