
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PauseCircleFillSvg from '@ant-design/icons-svg/lib/fill/PauseCircleFill';

export default {
  name: 'PauseCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PauseCircleFillSvg } },
      children
    ),
};
