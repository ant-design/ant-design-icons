
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ZhihuSquareFillSvg from '@ant-design/icons-svg/lib/fill/ZhihuSquareFill';

export default {
  name: 'IconZhihuSquareFilled',
  displayName: 'ZhihuSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ZhihuSquareFillSvg } },
      children
    ),
};
