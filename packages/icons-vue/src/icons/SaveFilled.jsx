// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SaveFilledSvg from '@ant-design/icons-svg/lib/asn/SaveFilled';

export default {
  name: 'IconSaveFilled',
  displayName: 'SaveFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SaveFilledSvg } },
      children,
    ),
};