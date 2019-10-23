
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CiCircleFillSvg from '@ant-design/icons-svg/lib/fill/CiCircleFill';

export default {
  name: 'IconCiCircleFilled',
  displayName: 'CiCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CiCircleFillSvg } },
      children
    ),
};
