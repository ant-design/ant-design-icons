
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MediumSquareFillSvg from '@ant-design/icons-svg/lib/fill/MediumSquareFill';

export default {
  name: 'IconMediumSquareFilled',
  displayName: 'MediumSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MediumSquareFillSvg } },
      children
    ),
};
