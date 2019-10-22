
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PictureFillSvg from '@ant-design/icons-svg/lib/fill/PictureFill';

export default {
  name: 'PictureFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PictureFillSvg } },
      children
    ),
};
