
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import IeCircleFillSvg from '@ant-design/icons-svg/lib/fill/IeCircleFill';

export default {
  name: 'IconIeCircleFilled',
  displayName: 'IeCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: IeCircleFillSvg } },
      children
    ),
};
