---
title: 准备Typescript开发Nodejs服务端自动化开发
date: 2021-06-17 19:05:45
category: 后端
tags: [Typescript, Nodejs, 自动化]
---

下面将介绍，使用 ts 开发的 nodejs 服务端的自动化开发环境搭建

# 目标

- 使 ts 代码在每次改动时自动编译
- 每次改动后自动重启开发服务器使得最新代码生效

# 环境

- VS Code
- nodemon 2.0.7
- ts-node ^10.0.0
- typescript ^3.4.5

# 主要的项目结构

```
.
├── package.json
├── src
│   └── app.ts
├── tsconfig.json
└── nodemon.json
复制代码
```

# 项目依赖

这里以一个 express 服务端程序作为演示

```json
{
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.7",
    "ts-node": "^10.0.0"
  },
  "devDependencies": {
    "@types/node": "^15.12.2",
    "ts-node": "^8.1.0",
    "typescript": "^3.4.5"
  }
}
```

# Typescript 配置

```cmd
tsc --init
```

执行上面的命令，将在当前目录下生成`tsconfig.js`文件

参考如下配置即可：

```json
{
  "compilerOptions": {
    "module": "commonjs", //指定生成哪个模块系统代码
    "target": "es6", //目标代码类型
    "noImplicitAny": false, //在表达式和声明上有隐含的'any'类型时报错。
    "sourceMap": false, //用于debug
    "rootDir": "./src", //仅用来控制输出的目录结构--outDir。
    "outDir": "./dist", //重定向输出目录。
    "watch": true, //在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  },
  "include": [
    //要监视改动的路径
    "./src/**/*"
  ],
  "exclude": [
    //忽略改动的路径
    "views",
    "static"
  ]
}
```

# nodemon 配置

在项目根目录下新建`nodemon.json`文件

如下配置：

```json
{
  "ignore": ["**/*.test.ts", "**/*.spec.ts", ".git", "node_modules"],
  "watch": ["src"], //监视src目录下的改动
  "exec": "npm  start", //监视到改动后执行的命令
  "ext": "ts" //目标文件后缀为ts
}
```

即可在文件改动时自动重启服务

# 配置自动重启 ts-node

在`package.json`中配置脚本如下

```json {3,4}
  "scripts": {
    "c": "tsc",
    "start": "ts-node src/app.ts",
    "dev": "nodemon",
  }
```

即可实现我们的俩个配置目标

在使用命令`npm run dev`即可启动 nodemon，
而每次我们改动 ts 中的代码后，
nodemon 会执行`npm start`，也就会再次重启 ts-node
即可达成我们的目的！
