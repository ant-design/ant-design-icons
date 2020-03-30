import { Tooltip } from 'antd';
import * as React from 'react';
import { render, mount } from 'enzyme';
import Icon, {
  getTwoToneColor, setTwoToneColor, createFromIconfontCN,
  HomeOutlined, SettingFilled, SmileOutlined, SyncOutlined,
  LoadingOutlined, CheckCircleTwoTone, ClockCircleOutlined,
} from '../lib';
import { getSecondaryColor } from '../src/utils';

function mountTest(Component) {
  describe('mount and unmount', () => {
    // https://github.com/ant-design/ant-design/pull/18441
    it('component could be updated and unmounted without errors', () => {
      const wrapper = mount(<Component />);
      expect(() => {
        wrapper.setProps({});
        wrapper.unmount();
      }).not.toThrow();
    });
  });
}

describe('Icon', () => {
  mountTest(HomeOutlined);
  mountTest(CheckCircleTwoTone);

  it('should render to a <span class="xxx"><svg>...</svg></span>', () => {
    const wrapper = render(<HomeOutlined className="my-icon-classname" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should support basic usage', () => {
    const wrapper = render(
      <div>
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <LoadingOutlined />
      </div>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support event listeners', () => {
    const onClickHandler = jest.fn();
    const onKeyUpHandler = jest.fn();
    const onMouseEnterHandler = jest.fn();
    const wrapper = mount(
      <div>
        <HomeOutlined onClick={onClickHandler} />
        <SettingFilled />
        <SmileOutlined onMouseEnter={onMouseEnterHandler} />
        <SyncOutlined spin onKeyUp={onKeyUpHandler} />
      </div>,
    );
    expect(wrapper).toMatchSnapshot();

    const icon1 = wrapper.find('span').at(0);
    icon1.simulate('click');
    expect(onClickHandler).toBeCalledTimes(1);

    const icon2 = wrapper.find('span').at(2);
    icon2.simulate('mouseenter');
    expect(onMouseEnterHandler).toBeCalledTimes(1);

    const icon3 = wrapper.find('span').at(3);
    icon3.simulate('keyup');
    expect(onKeyUpHandler).toBeCalledTimes(1);
  });

  it('should support two-tone icon', () => {
    let wrapper = render(<CheckCircleTwoTone twoToneColor="#f5222d" />);
    expect(wrapper).toMatchSnapshot();

    wrapper = render(<CheckCircleTwoTone twoToneColor={['#f5222d', '#eb2f96']} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should support config global two-tone primary color', () => {
    expect(typeof getTwoToneColor()).toBe('string');

    setTwoToneColor('#1890ff');
    expect(getTwoToneColor()).toBe('#1890ff');
    let wrapper = render(<CheckCircleTwoTone />);
    expect(wrapper).toMatchSnapshot();

    setTwoToneColor(['#1890ff', '#eb2f96']);
    expect(getTwoToneColor()).toEqual(['#1890ff', '#eb2f96']);

    wrapper = render(<CheckCircleTwoTone />);
    expect(wrapper).toMatchSnapshot();

    setTwoToneColor(['#1890ff', getSecondaryColor('#1890ff')]);
    expect(getTwoToneColor()).toEqual(['#1890ff', getSecondaryColor('#1890ff')]);

    wrapper = render(<CheckCircleTwoTone />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should support pass svg paths as children', () => {
    const wrapper = render(
      <Icon viewBox="0 0 24 24">
        <title>Cool Home</title>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </Icon>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support event listeners when passing svg paths as children', () => {
    const onClickHandler = jest.fn();
    const onKeyUpHandler = jest.fn();
    const onMouseEnterHandler = jest.fn();

    const wrapper = mount(
      <Icon
        viewBox="0 0 24 24"
        onClick={onClickHandler}
        onKeyUp={onKeyUpHandler}
        onMouseEnter={onMouseEnterHandler}>
        <title>Cool Home</title>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </Icon>,
    );
    expect(wrapper).toMatchSnapshot();
    const icon = wrapper.find('span').at(0);
    icon.simulate('click');
    expect(onClickHandler).toBeCalledTimes(1);
    icon.simulate('mouseenter');
    expect(onMouseEnterHandler).toBeCalledTimes(1);
    icon.simulate('keyup');
    expect(onKeyUpHandler).toBeCalledTimes(1);
  });

  it('should give warning and render <i>{null}</i>', () => {
    const wrapper = render(<Icon viewBox="0 0 24 24" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should support wrapped by Tooltip', () => {
    const onVisibleChange = jest.fn();
    const wrapper = mount(
      <Tooltip
        title="xxxxx"
        mouseEnterDelay={0}
        mouseLeaveDelay={0}
        onVisibleChange={onVisibleChange}
      >
        <HomeOutlined />
      </Tooltip>,
    );
    expect(wrapper.find('span')).toHaveLength(1);
    const icon = wrapper.find('span').at(0);
    icon.simulate('mouseenter');
    expect(onVisibleChange).toHaveBeenCalledWith(true);
    expect((wrapper.instance() as any).tooltip.props.visible).toBe(true);

    icon.simulate('mouseleave');
    expect(onVisibleChange).toHaveBeenCalledWith(false);
    expect((wrapper.instance() as any).tooltip.props.visible).toBe(false);
  });

  it('should support custom usage of children', () => {
    expect(() => {
      render(<Icon>&E648</Icon>);
    }).not.toThrow();
  });

  it('support render svg as component', () => {
    const renderSvg = () => (
      <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" />
    );
    const SvgIcon = props => <Icon component={renderSvg} {...props} />;

    expect(mount(<SvgIcon />).render()).toMatchSnapshot();
  });

  describe('warning on conflicting theme', () => {
    let errorSpy;
    beforeEach(() => {
      errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
      errorSpy.mockRestore();
    });

    it('does not warn', () => {
      mount(<ClockCircleOutlined />);
      expect(errorSpy).not.toHaveBeenCalled();
    });
  });

  describe('`component` prop', () => {
    it('can access to svg defs if has children', () => {
      const wrapper = render(
        <Icon
          className="my-home-icon"
          component={svgProps => (
            <svg {...svgProps}>
              <defs>
                <linearGradient id="gradient">
                  <stop offset="20%" stopColor="#39F" />
                  <stop offset="90%" stopColor="#F3F" />
                </linearGradient>
              </defs>
              {React.Children.map(svgProps.children, (child: any) =>
                React.cloneElement(
                  child,
                  child.type === 'path' ? { fill: 'scriptUrl(#gradient)' } : {},
                ),
              )}
            </svg>
          )}
        >
          <title>Cool Home</title>
          <path d="'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'" />
        </Icon>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should support svg react component', () => {
    // children props would make no sense
    const SvgComponent = props => (
      <svg viewBox="0 0 24 24" {...props}>
        <title>Custom Svg</title>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    );

    const wrapper = render(
      <Icon className="my-home-icon" component={SvgComponent}>
        <title>Cool Home</title>
        <path d="'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'" />
      </Icon>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support event listeners', () => {
    const onClickHandler = jest.fn();
    const onKeyUpHandler = jest.fn();
    const onMouseEnterHandler = jest.fn();
    // children props would make no sense
    const SvgComponent = props => (
      <svg viewBox="0 0 24 24" {...props}>
        <title>Custom Svg</title>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    );

    const wrapper = mount(
      <Icon
        className="my-home-icon"
        component={SvgComponent}
        onClick={onClickHandler}
        onKeyUp={onKeyUpHandler}
        onMouseEnter={onMouseEnterHandler}>
        <title>Cool Home</title>
        <path d="'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'" />
      </Icon>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();

    const icon = wrapper.find('span').at(0);
    icon.simulate('click');
    expect(onClickHandler).toBeCalledTimes(1);
    icon.simulate('mouseenter');
    expect(onMouseEnterHandler).toBeCalledTimes(1);
    icon.simulate('keyup');
    expect(onKeyUpHandler).toBeCalledTimes(1);
  });
});

describe('Icon.createFromIconfontCN()', () => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    extraCommonProps: {
      className: 'abc',
    },
  });

  mountTest(() => <IconFont type="icon-facebook" />);

  it('should support iconfont.cn', () => {
    const wrapper = render(
      <div className="icons-list">
        <IconFont type="icon-tuichu" />
        <IconFont type="icon-facebook" />
        <IconFont type="icon-twitter" />
      </div>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support event listeners', () => {
    const onClickHandler = jest.fn();
    const onKeyUpHandler = jest.fn();
    const onMouseEnterHandler = jest.fn();
    const wrapper = mount(
      <div>
        <IconFont type="icon-tuichu" onClick={onClickHandler} />
        <IconFont type="icon-suofang" />
        <IconFont type="icon-facebook" onMouseEnter={onMouseEnterHandler} />
        <IconFont type="icon-twitter" spin onKeyUp={onKeyUpHandler} />
      </div>,
    );
    expect(wrapper).toMatchSnapshot();

    const icon1 = wrapper.find('span').at(0);
    icon1.simulate('click');
    expect(onClickHandler).toBeCalledTimes(1);

    const icon2 = wrapper.find('span').at(2);
    icon2.simulate('mouseenter');
    expect(onMouseEnterHandler).toBeCalledTimes(1);

    const icon3 = wrapper.find('span').at(3);
    icon3.simulate('keyup');
    expect(onKeyUpHandler).toBeCalledTimes(1);
  });

  it('extraCommonProps should works fine and can be overwritten', () => {
    const wrapper = render(
      <div className="icons-list">
        <IconFont type="icon-tuichu" className="bcd" />
        <IconFont type="icon-facebook" />
        <IconFont type="icon-twitter" className="efg" />
      </div>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support wrapped by Tooltip', () => {
    const onVisibleChange = jest.fn();
    const wrapper = mount(
      <Tooltip
        title="xxxxx"
        mouseEnterDelay={0}
        mouseLeaveDelay={0}
        onVisibleChange={onVisibleChange}
      >
        <IconFont type="icon-facebook" />
      </Tooltip>,
    );
    expect(wrapper.find('span')).toHaveLength(1);
    const icon = wrapper.find('span').at(0);
    icon.simulate('mouseenter');
    expect(onVisibleChange).toHaveBeenCalledWith(true);
    expect((wrapper.instance() as any).tooltip.props.visible).toBe(true);

    icon.simulate('mouseleave');
    expect(onVisibleChange).toHaveBeenCalledWith(false);
    expect((wrapper.instance() as any).tooltip.props.visible).toBe(false);
  });
});
