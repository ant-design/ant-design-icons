// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileExclamationFilledSvg from '@ant-design/icons-svg/lib/asn/FileExclamationFilled';

export default {
  name: 'IconFileExclamationFilled',
  displayName: 'FileExclamationFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileExclamationFilledSvg } },
      children,
    ),
};