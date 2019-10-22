
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DropboxCircleFillSvg from '@ant-design/icons-svg/lib/fill/DropboxCircleFill';

export default {
  name: 'DropboxCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DropboxCircleFillSvg } },
      children
    ),
};
