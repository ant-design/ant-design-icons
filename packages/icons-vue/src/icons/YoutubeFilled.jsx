
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import YoutubeFillSvg from '@ant-design/icons-svg/lib/fill/YoutubeFill';

export default {
  name: 'YoutubeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: YoutubeFillSvg } },
      children
    ),
};
