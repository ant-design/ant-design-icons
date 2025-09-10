# CircleCI 到 GitHub Actions 迁移指南

## 迁移摘要

此项目已从 CircleCI 迁移到 GitHub Actions。新的工作流程文件位于 `.github/workflows/ci.yml`。

## 主要变化

### 1. 工作流程结构
- **CircleCI**: 使用 `jobs` 和 `workflows` 分离配置
- **GitHub Actions**: 在单个 workflow 文件中定义所有内容

### 2. 依赖管理和缓存
- **CircleCI**: 使用 `persist_to_workspace` 和 `attach_workspace`
- **GitHub Actions**: 使用 `actions/cache` 进行依赖和构建产物缓存

### 3. 并行执行
保持与 CircleCI 相同的并行策略：
- `setup` 作为所有其他作业的前置依赖
- `icons-svg` 依赖 `setup`
- 其他图标包测试作业依赖 `setup` 和 `icons-svg`

### 4. 触发条件
- **推送和拉取请求**: 针对 `master` 和 `main` 分支
- **定时任务**: 每日午夜 UTC 时间运行（等同于 CircleCI 的 nightly 作业）

## 配置对比

### CircleCI (.circleci/config.yml)
```yaml
version: 2.1
jobs:
  setup:
    docker:
      - image: cimg/node:20.9.0-browsers
    steps:
      - checkout
      - run: yarn bootstrap
      - persist_to_workspace:
          root: ~/ant-design-icons
          paths:
            - node_modules
            - packages/icons-*/node_modules
```

### GitHub Actions (.github/workflows/ci.yml)
```yaml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20.9.0'
      - uses: actions/cache@v3
        with:
          path: |
            node_modules
            packages/*/node_modules
          key: ${{ runner.os }}-node-${{ hashFiles('**/package.json', '**/yarn.lock') }}
```

## 主要优势

### 1. 更好的缓存策略
- 基于文件哈希的智能缓存
- 自动缓存键管理
- 更快的构建速度

### 2. 原生 GitHub 集成
- 无需第三方服务
- 更好的 PR 集成
- 统一的 GitHub 生态系统

### 3. 现代化工具
- 最新的 actions 版本
- 更好的日志和调试功能
- 更灵活的配置选项

## 特殊配置

### Angular 测试
Angular 测试需要浏览器环境，已配置：
```yaml
- name: Test Angular icons
  run: yarn angular:ci
  env:
    CHROME_BIN: /usr/bin/google-chrome
```

### 构建产物缓存
SVG 图标的构建产物在不同作业间共享：
```yaml
- name: Cache build artifacts
  uses: actions/cache@v3
  with:
    path: |
      packages/icons-svg/es
      packages/icons-svg/lib
      packages/icons-svg/inline-svg
    key: icons-svg-build-${{ github.sha }}
```

## 验证迁移

1. **删除或备份** `.circleci` 目录
2. **推送更改** 到 GitHub
3. **观察** GitHub Actions 工作流程是否正常运行
4. **确认** 所有测试通过

## 回滚计划

如果需要回滚到 CircleCI：
1. 恢复 `.circleci/config.yml` 文件
2. 删除 `.github/workflows/ci.yml` 文件
3. 在 CircleCI 中重新启用项目

## 注意事项

- 确保所有必要的 GitHub Secrets 已配置
- 检查分支保护规则是否需要更新
- 更新状态徽章引用（如果使用）
- 通知团队成员工作流程的变化