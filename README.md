# vue-phenix-plugin 【vue3 + ts + vite】
**【目标】vue3 自定义组件库**

[TOC]

**相关资料链接** [vite 文档地址](https://vitejs.dev/guide/)
#### 一、入门
##### 1.1 搭建您的第一个Vite项目
> **相容性说明** Vite需要[Node.js](https://nodejs.org/en/) 版本> = 12.0.0。

使用NPM：

`npm init @vitejs/app`

使用yarn：

`yarn create @vitejs/app`

然后按照提示进行操作！

您还可以通过其他命令行选项直接指定项目名称和要使用的模板。例如，要搭建Vite + Vue项目，请运行：

`npm init @vitejs/app my-vue-app --template vue`

支持的模板预设包括：
+ vanilla
+ vue
+ vue-ts
+ react
+ react-ts
+ preact
+ preact-ts
+ lit-element
+ lit-element-ts

有关每个模板的更多详细信息，请参见[@vitejs/create-app](https://github.com/vitejs/vite/tree/main/packages/create-app) 。

运行：

`vite dev`

构建build：

`vite build`

##### 1.2 index.html 和项目根

您可能已经注意到的一件事是，在Vite项目中，`index.html`它处于中心位置而不是隐藏在内部`public`。这是故意的：在开发过程中，Vite是服务器，并且`index.html`是应用程序的入口点。

Vite视为`index.html`源代码和模块图的一部分。它解决`<script type="module" src="...">`了引用您的JavaScript源代码的问题。即使`<script type="module">`通过引用的内联和CSS`<link href>`也享受Vite特定的功能。此外，内部`index.html`的URL会自动重新设置基础，因此不需要特殊的`%PUBLIC_URL%`占位符。

与静态http服务器类似，Vite具有“根目录”的概念，从中可以从中提供文件。源代码中的绝对URL将使用项目根目录作为基础来解析，因此您可以像使用普通静态文件服务器一样（除非功能更强大！）来编写代码。Vite还能够处理解析为根目录以外的文件系统位置的依赖项，即使在基于Monorepo的设置中也可以使用。

Vite还支持具有多个`.html`入口点的多页面应用程序( [multi-page apps](https://vitejs.dev/guide/build.html#multi-page-app)  )。

##### 1.3 指定备用根

运行`vite`时以当前工作目录为根目录启动开发服务器。您可以使用指定备用根`vite serve some/sub/dir`。

##### 1.4 命令行界面

在安装了Vite的项目中，您可以`vite`在npm脚本中使用二进制文件，也可以直接通过运行它`npx vite`。这是脚手架Vite项目中的默认npm脚本：

```
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

您可以指定其他CLI选项，例如`--port`或`--https`。有关CLI选项的完整列表，请`npx vite --help`在您的项目中运行。

##### 1.5 使用未发布的提交
如果您迫不及待地需要一个新版[本来](https://github.com/vitejs/vite) 测试最新功能，则需要将[vite存储库克隆](https://github.com/vitejs/vite) 到本地计算机，然后自己构建并链接它（需要使用 [Yarn 1.x](https://classic.yarnpkg.com/lang/en/) ）：

```console
git clone https://github.com/vitejs/vite.git
cd vite
yarn
cd packages/vite
yarn build
yarn link
```

然后转到基于vite的项目并运行`yarn link vite`。现在，重新启动开发服务器（`yarn dev`）以顺其自然！
