
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DownCircleFillSvg from '@ant-design/icons-svg/lib/fill/DownCircleFill';

export default {
  name: 'IconDownCircleFilled',
  displayName: 'DownCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownCircleFillSvg } },
      children
    ),
};
