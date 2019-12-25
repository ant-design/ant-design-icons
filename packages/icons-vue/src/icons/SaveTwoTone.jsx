// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SaveTwoToneSvg from '@ant-design/icons-svg/lib/asn/SaveTwoTone';

export default {
  name: 'IconSaveTwoTone',
  displayName: 'SaveTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SaveTwoToneSvg } },
      children,
    ),
};