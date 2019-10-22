
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AppstoreFillSvg from '@ant-design/icons-svg/lib/fill/AppstoreFill';

export default {
  name: 'AppstoreFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AppstoreFillSvg } },
      children
    ),
};
