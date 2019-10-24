
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ApartmentOutlineSvg from '@ant-design/icons-svg/lib/outline/ApartmentOutline';

export default {
  name: 'IconApartment',
  displayName: 'Apartment',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ApartmentOutlineSvg } },
      children
    ),
};
