
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DropboxOutlineSvg from '@ant-design/icons-svg/lib/outline/DropboxOutline';

export default {
  name: 'Dropbox',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DropboxOutlineSvg } },
      children
    ),
};
