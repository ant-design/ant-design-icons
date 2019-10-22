
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DropboxSquareFillSvg from '@ant-design/icons-svg/lib/fill/DropboxSquareFill';

export default {
  name: 'DropboxSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DropboxSquareFillSvg } },
      children
    ),
};
