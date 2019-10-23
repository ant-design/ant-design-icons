
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FilePdfFillSvg from '@ant-design/icons-svg/lib/fill/FilePdfFill';

export default {
  name: 'IconFilePdfFilled',
  displayName: 'FilePdfFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilePdfFillSvg } },
      children
    ),
};
