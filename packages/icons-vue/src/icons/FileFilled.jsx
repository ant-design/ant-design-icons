// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileFilledSvg from '@ant-design/icons-svg/lib/asn/FileFilled';

export default {
  name: 'IconFileFilled',
  displayName: 'FileFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileFilledSvg } },
      children,
    ),
};