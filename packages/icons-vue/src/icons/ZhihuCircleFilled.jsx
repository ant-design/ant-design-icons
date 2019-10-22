
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ZhihuCircleFillSvg from '@ant-design/icons-svg/lib/fill/ZhihuCircleFill';

export default {
  name: 'ZhihuCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ZhihuCircleFillSvg } },
      children
    ),
};
