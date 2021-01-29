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

运行测试build之后包：

`serve ./dist`

##### 1.2 index.html 和项目根

您可能已经注意到的一件事是，在Vite项目中，`index.html`它处于中心位置而不是隐藏在内部`public`。这是故意的：在开发过程中，Vite是服务器，并且`index.html`是应用程序的入口点。

Vite视为`index.html`源代码和模块图的一部分。它解决`<script type="module" src="...">`了引用您的JavaScript源代码的问题。即使`<script type="module">`通过引用的内联和CSS`<link href>`也享受Vite特定的功能。此外，内部`index.html`的URL会自动重新设置基础，因此不需要特殊的`%PUBLIC_URL%`占位符。

与静态http服务器类似，Vite具有“根目录”的概念，从中可以从中提供文件。源代码中的绝对URL将使用项目根目录作为基础来解析，因此您可以像使用普通静态文件服务器一样（除非功能更强大！）来编写代码。Vite还能够处理解析为根目录以外的文件系统位置的依赖项，即使在基于Monorepo的设置中也可以使用。

Vite还支持具有多个`.html`入口点的多页面应用程序( [multi-page apps](https://vitejs.dev/guide/build.html#multi-page-app)  )。

##### 1.3 指定备用根

运行`vite`时以当前工作目录为根目录启动开发服务器。您可以使用指定备用根`vite serve some/sub/dir`。

##### 1.4 命令行界面

在安装了Vite的项目中，您可以`vite`在npm脚本中使用二进制文件，也可以直接通过运行它`npx vite`。这是脚手架Vite项目中的默认npm脚本：

``` json
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


#### 二、环境变量和模式

##### 2.1 环境变量
Vite在特殊对象上公开env变量。在所有情况下都可以使用一些内置变量：`import.meta.env`

+ `import.meta.env.MODE`：{string}应用运行的[模式](https://vitejs.dev/guide/env-and-mode.html#modes) 。

+ `import.meta.env.BASE_URL`：{string}从其提供应用程序的基本URL。这由[baseconfig](https://vitejs.dev/config/#base) 选项确定。

+ `import.meta.env.PROD`：{boolean}应用程序是否正在生产中运行。

+ `import.meta.env.DEV`：{boolean}应用程序是否正在开发中运行（始终与相反）`import.meta.env.PROD`

###### 2.1.1 生产替换

在生产期间，将这些env变量**静态替换**。因此，必须始终使用完整的静态字符串来引用它们。例如，动态键访问之类的将不起作用。`import.meta.env[key]`

它还将替换出现在JavaScript字符串和Vue模板中的这些字符串。这应该是一种罕见的情况，但是可能是意外的。有解决此问题的方法：

+ 对于JavaScript字符串，您可以使用Unicode零宽度空格将字符串分开，例如。`'import.meta\u200b.env.MODE'`

+ 对于已被编译为JavaScript字符串的Vue模板或其他HTML，您可以使用<wbr>标记，例如。`import.meta.<wbr>env.MODE`

##### 2.2 .env 文件
Vite使用[dotenv](https://github.com/motdotla/dotenv) 从项目根目录中的以下文件加载其他环境变量：

```console
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

加载的env变量还将通过公开给您的客户端源代码。`import.meta.env`

为防止将env变量意外泄露给客户端，只有前缀为的变量`VITE_`才对Vite处理的代码公开。例如以下文件：

```
DB_PASSWORD=foobar
VITE_SOME_KEY=123
```
仅`VITE_SOME_KEY`将如`import.meta.env.VITE_SOME_KEY`公开您的客户端源代码，但不会公开` DB_PASSWORD`。

> 安全注意事项
> + `.env.*.local`文件是仅本地的，并且可以包含敏感变量。您应该添加`.local`到自己的目录中`.gitignore`，以免将它们检入git中。
> + 由于暴露在你的Vite的源代码中的任何变量都将在您的客户端包结束，`VITE_*`变量应该不包含任何敏感信息。


##### 2.3 模式

默认情况下，dev服务器（`serve`命令）以development模式运行，而`build`命令以`production`模式运行。

这意味着在运行时`vite build`，它将从以下位置加载env变量`.env.production`：

```
# .env.production
VITE_APP_TITLE=My App
```
在您的应用中，您可以使用`import.meta.env.VITE_APP_TITLE`渲染标题

但是，重要的是要理解，**模式**是一个广泛的概念，而不仅仅是开发与生产。一个典型的示例是您可能需要一种“登台”模式，该模式应具有与生产类似的行为，但与生产中的env变量略有不同。

您可以通过传递`--mode`选项标志来覆盖用于命令的默认模式。例如，如果您要为我们的假设登台模式构建应用程序：

```
vite build --mode staging
```

为了获得我们想要的行为，我们需要一个`.env.staging`文件：

```
# .env.staging
NODE_ENV=production
VITE_APP_TITLE=My App (staging)
```
现在，您的登台应用程序应该具有与生产类似的行为，但是显示的标题与生产不同。
