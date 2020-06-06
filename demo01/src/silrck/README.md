# demo

## 常用命令

-   yarn 安装依赖
-   yarn serve 开发
-   yarn build 构建
-   yarn lint 检查&修复

## 备注

-   建议基于 `BEM` 编写样式,组件的 CSS 命名统一使用 `${block-name}__${element-name}--${modifier-name}`
-   组件放`components`里，各组件文件夹命名以大写字母开头,遵循大驼峰式命名规则,如`CamelCase`
-   git 分支遵循 git flow 规范

## Git

-   commitlint 规范化 git commit message
-   如果手工 commit,需遵循格式：type(scope?): subject，否则不能提交

### Git commit

-   `git add` 是必须的
-   请使用`npm run commit`替换`git commit -m`，根据命令行提示进行选择输入

### Commit Message Format

```bash
# <type>(<scope>): <subject>
  fix(登录):修复bug
```

### Commit type

-   build:影响构建系统或外部依赖项的更改（示例范围：gulp，broccoli，npm）
-   ci: 对 CI 配置文件和脚本的更改（示例范围:Travis，Circle，BrowserStack，SauceLabs）
-   docs: 只更改文档
-   feat: 一项新功能
-   fix: bug 修复
-   perf: 改进性能的代码更改
-   refactor: 代码更改既不修复错误也不添加功能
-   style: 不影响代码含义的更改（空格，格式，缺少分号等）
-   test: 添加缺失测试或更正现有测试
