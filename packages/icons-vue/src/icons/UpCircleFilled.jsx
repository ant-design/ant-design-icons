
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UpCircleFillSvg from '@ant-design/icons-svg/lib/fill/UpCircleFill';

export default {
  name: 'UpCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpCircleFillSvg } },
      children
    ),
};
