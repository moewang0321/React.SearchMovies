## 基于React的电影搜索Demo

---

 `node6+` `react` 

---

开始学习react

只是用来熟悉react和react的钩子🐵方面相关知识

稍微运用一下相关知识，接口使用

[OMDP API ]: https://www.omdbapi.com/

---

## 实现效果

![](https://i.loli.net/2019/11/29/zEPwByMFrKfkAm3.png)

---

## 运行本项目

### 所需的玩意

- Node (≥ 6)
- 一个帅气的IDE
- 一个 OMDB 的API key (你可以从 [这里](http://www.omdbapi.com/apikey.aspx) 自己生成一个或者直接使用我的)

```
$ npm i
$ yarn start
```

---

## 可能遇到的问题

- 如果yarn start报错not found module

```
$ npm cache clean --force
$ rm -rf node_modules
$ rm -rf package-lock.json
$ npm install
```

---

## 目录结构

```

├─.gitignore
├─package.json
├─README.md
├─result.txt
├─yarn.lock
├─src
|  ├─App.css
|  ├─App.test.js
|  ├─index.css
|  ├─index.js
|  ├─logo.svg
|  ├─serviceWorker.js
|  ├─components
|  |     ├─App.js
|  |     ├─Header.js
|  |     ├─Movie.js
|  |     └Search.js
├─public
|   ├─favicon.ico
|   ├─index.html
|   ├─logo192.png
|   ├─logo512.png
|   ├─manifest.json
|   └robots.txt

```

---