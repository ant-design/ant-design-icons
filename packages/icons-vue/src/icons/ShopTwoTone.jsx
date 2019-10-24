
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShopTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ShopTwoTone';

export default {
  name: 'IconShopTwoTone',
  displayName: 'ShopTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShopTwoToneSvg } },
      children
    ),
};
