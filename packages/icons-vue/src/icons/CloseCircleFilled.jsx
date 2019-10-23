
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloseCircleFillSvg from '@ant-design/icons-svg/lib/fill/CloseCircleFill';

export default {
  name: 'IconCloseCircleFilled',
  displayName: 'CloseCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseCircleFillSvg } },
      children
    ),
};
