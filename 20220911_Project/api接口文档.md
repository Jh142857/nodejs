# 文章管理系统后台接口

## 1 请求的根路径

> http://127.0.0.1:8080
>
> http://192.168.146.1:8080

## 2 用户登录注册

### 2.1 注册

#### 简要描述

- 用户注册接口

#### 请求的URL地址

- `/api/reguser`

#### 请求方式

- POST

#### 请求体

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |

#### 返回示例

```json
{
  "status": 0,
  "message": "注册成功！"
}
```

#### 返回参数说明

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

### 2.2 登录

#### 简要描述

- 用户登录接口

#### 请求的URL地址

- `/api/login`

#### 请求方式

- POST

#### 请求体

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |

#### 返回示例

```json
{
    "status": 0,
    "message": "登录成功！",
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJ3d3d3IiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IjExMTExMTExIiwiZW1haWwiOiIxMjEyMTIxM0BxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2Mzc2MDU3OCwiZXhwIjoxNjYzNzk2NTc4fQ.WoLIJfkG34dywWFX9Yp82qYBYW1g4zclv3XBNulhQNU"
}
```

#### 返回参数说明

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |
| token   | string | 用于有权限接口的身份认证       |

## 3 个人中心

### 3.1 获取用户的基本信息

#### 简要描述

- 获取用户的基本信息，包括id、用户名、昵称、邮箱和头像。

#### 请求的URL地址

- `/my/userinfo`

#### 请求方式

- GET

#### Header

```js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJ3d3d3IiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IjExMTExMTExIiwiZW1haWwiOiIxMjEyMTIxM0BxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2Mzc2MDU3OCwiZXhwIjoxNjYzNzk2NTc4fQ.WoLIJfkG34dywWFX9Yp82qYBYW1g4zclv3XBNulhQNU
```

#### 参数

无

#### 返回示例

```json
{
    "status": 0,
    "message": "获取用户信息成功！",
    "data": {
        "id": 8,
        "username": "wwww",
        "nickname": "11111111",
        "email": "12121213@qq.com",
        "user_pic": "data:image/png;base64,VE9PTUFOWVNFQ1JFVFM="
    }
}
```

#### 返回参数说明

| 参数名     | 类型   | 说明                           |
| :--------- | :----- | ------------------------------ |
| status     | int    | 请求是否成功，0：成功；1：失败 |
| message    | string | 请求结果的描述消息             |
| data       | object | 用户的基本信息                 |
| + id       | int    | 用户的 id                      |
| + username | string | 用户名                         |
| + nickname | string | 昵称                           |
| + email    | string | 邮箱                           |
| + user_pic | string | 头像，base64格式的图片         |

### 3.2 更新用户的基本信息

#### 简要描述

- 更新用户的信息，包括昵称和邮箱

#### 请求的URL地址

- `/my/userinfo`

#### 请求方式

- POST

#### Header

```js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJ3d3d3IiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IjExMTExMTExIiwiZW1haWwiOiIxMjEyMTIxM0BxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2Mzc2MDU3OCwiZXhwIjoxNjYzNzk2NTc4fQ.WoLIJfkG34dywWFX9Yp82qYBYW1g4zclv3XBNulhQNU
```

#### 请求体

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| id       | 是   | number | 用户id |
| nickname | 是   | string | 昵称   |
| email    | 是   | string | 邮箱   |

#### 返回示例

```json
{
    "status": 0,
    "message": "更新信息成功！"
}
```

#### 返回参数说明

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

### 3.3 重置用户密码

#### 简要描述

- 重置用户密码，注意不能与原密码重复

#### 请求的URL地址

- `/my/updatepwd`

#### 请求方式

- POST

#### Header

```js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJ3d3d3IiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IjExMTExMTExIiwiZW1haWwiOiIxMjEyMTIxM0BxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2Mzc2MDU3OCwiZXhwIjoxNjYzNzk2NTc4fQ.WoLIJfkG34dywWFX9Yp82qYBYW1g4zclv3XBNulhQNU
```

#### 请求体

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| oldPwd | 是   | string | 原密码 |
| newPwd | 是   | string | 新密码 |

#### 返回示例

```json
{
    "status": 0,
    "message": "更新密码成功！"
}
```

#### 返回参数说明

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

### 3.4 更换头像

#### 简要描述

- 更换头像

#### 请求的URL地址

- `/my/update/avatar`

#### 请求方式

- POST

#### Header

```js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJ3d3d3IiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IjExMTExMTExIiwiZW1haWwiOiIxMjEyMTIxM0BxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2Mzc2MDU3OCwiZXhwIjoxNjYzNzk2NTc4fQ.WoLIJfkG34dywWFX9Yp82qYBYW1g4zclv3XBNulhQNU
```

#### 请求体

| 参数名 | 必选 | 类型   | 说明                       |
| :----- | :--- | :----- | -------------------------- |
| avatar | 是   | string | 新头像，base64格式的字符串 |

#### 返回示例

```json
{
    "status": 0,
    "message": "更新头像成功！"
}
```

#### 返回参数说明

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 4 文章分类

### 4.1 获取文章分类列表

#### 简要描述

- 获取文章分类列表

#### 请求的URL地址

- `/my/article/getcates`

#### 请求方式

- GET

#### Header

```js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJ3d3d3IiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IjExMTExMTExIiwiZW1haWwiOiIxMjEyMTIxM0BxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2Mzc2MDU3OCwiZXhwIjoxNjYzNzk2NTc4fQ.WoLIJfkG34dywWFX9Yp82qYBYW1g4zclv3XBNulhQNU
```

#### 参数

无

#### 返回示例

```json
{
    "status": 0,
    "message": "获取文章列表成功",
    "data": [
        {
            "id": 1,
            "name": "科技",
            "alias": "Keji",
            "is_delete": 0
        },
        {
            "id": 2,
            "name": "历史",
            "alias": "Lishi",
            "is_delete": 0
        },
        {
            "id": 4,
            "name": "生活",
            "alias": "life",
            "is_delete": 0
        }
    ]
}
```

#### 返回参数说明

| 参数名      | 类型   | 说明                             |
| :---------- | :----- | -------------------------------- |
| status      | int    | 请求是否成功，0：成功；1：失败   |
| message     | string | 请求结果的描述消息               |
| data        | array  | 文章分类的数组                   |
| + Id        | int    | 分类 Id                          |
| + name      | string | 分类名称                         |
| + alias     | string | 分类别名                         |
| + is_delete | int    | 是否被删除，0：未删除；1：已删除 |

### 4.2 新增文章分类

#### 简要描述

- 更换头像

#### 请求的URL地址

- `/my/update/addcate`

#### 请求方式

- POST

#### Header

```js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJ3d3d3IiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IjExMTExMTExIiwiZW1haWwiOiIxMjEyMTIxM0BxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2Mzc2MDU3OCwiZXhwIjoxNjYzNzk2NTc4fQ.WoLIJfkG34dywWFX9Yp82qYBYW1g4zclv3XBNulhQNU
```

#### 请求体

| 参数名 | 必选 | 类型   | 说明     |
| :----- | :--- | :----- | -------- |
| name   | 是   | string | 分类名称 |
| alias  | 是   | string | 分类别名 |

#### 返回示例

```json
{
    "status": 0,
    "message": "新增文章分类成功！"
}
```

#### 返回参数说明

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

### 4.3 删除文章分类

#### 简要描述

- 删除文章分类

#### 请求的URL地址

- `/my/article/delcate/:id`

#### 请求方式

- GET

#### Header

```js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJ3d3d3IiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IjExMTExMTExIiwiZW1haWwiOiIxMjEyMTIxM0BxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2Mzc2MDU3OCwiZXhwIjoxNjYzNzk2NTc4fQ.WoLIJfkG34dywWFX9Yp82qYBYW1g4zclv3XBNulhQNU
```

#### URL 参数：

| 参数名 | 必选 | 类型   | 说明                                   |
| :----- | :--- | :----- | -------------------------------------- |
| id     | 是   | string | 要删除的分类 Id，注意：这是一个URL参数 |

#### 返回示例

```json
{
    "status": 0,
    "message": "删除文章分类成功！"
}
```

#### 返回参数说明

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

### 4.4 根据 Id 获取文章分类数据

#### 简要描述

- 根据 Id 获取文章分类数据

#### 请求的URL地址

- `/my/article/getcate/:id`

#### 请求方式

- GET

#### Header

```js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJ3d3d3IiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IjExMTExMTExIiwiZW1haWwiOiIxMjEyMTIxM0BxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2Mzc2MDU3OCwiZXhwIjoxNjYzNzk2NTc4fQ.WoLIJfkG34dywWFX9Yp82qYBYW1g4zclv3XBNulhQNU
```

#### URL 参数：

| 参数名 | 必选 | 类型   | 说明                                   |
| :----- | :--- | :----- | -------------------------------------- |
| id     | 是   | string | 要获取的分类 Id，注意：这是一个URL参数 |

#### 返回示例

```json
{
    "status": 0,
    "message": "获取文章分类成功！",
    "data": {
        "id": 6,
        "name": "大学",
        "alias": "daxue",
        "is_delete": 1
    }
}
```

#### 返回参数说明

| 参数名    | 类型   | 说明                           |
| :-------- | :----- | ------------------------------ |
| status    | int    | 请求是否成功，0：成功；1：失败 |
| message   | string | 请求结果的描述消息             |
| data      | object | 文章分类的信息对象             |
| Id        | int    | 分类 Id                        |
| name      | string | 分类名称                       |
| alias     | string | 分类别名                       |
| is_delete | int    | 是否被删除，0：未删除；1：删除 |

### 4.5 根据 Id 更新文章分类数据

#### 简要描述

- 更换头像

#### 请求的URL地址

- `/my/update/addcate`

#### 请求方式

- POST

#### Header

```js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJ3d3d3IiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IjExMTExMTExIiwiZW1haWwiOiIxMjEyMTIxM0BxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2Mzc2MDU3OCwiZXhwIjoxNjYzNzk2NTc4fQ.WoLIJfkG34dywWFX9Yp82qYBYW1g4zclv3XBNulhQNU
```

#### 请求体

| 参数名 | 必选 | 类型   | 说明     |
| :----- | :--- | :----- | -------- |
| name   | 是   | string | 分类名称 |
| alias  | 是   | string | 分类别名 |

#### 返回示例

```json
{
    "status": 0,
    "message": "新增文章分类成功！"
}
```

#### 返回参数说明

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

### 4.6 根据 Id 更新文章分类数据

#### 简要描述

- 根据 Id 更新文章分类数据

#### 请求的URL地址

- `/my/article/updatecate`

#### 请求方式

- GET

#### Header

```js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJ3d3d3IiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IjExMTExMTExIiwiZW1haWwiOiIxMjEyMTIxM0BxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2Mzc2MDU3OCwiZXhwIjoxNjYzNzk2NTc4fQ.WoLIJfkG34dywWFX9Yp82qYBYW1g4zclv3XBNulhQNU
```

#### 请求体：

| 参数名 | 必选 | 类型   | 说明     |
| :----- | :--- | :----- | -------- |
| Id     | 是   | int    | 分类 Id  |
| name   | 是   | string | 分类名称 |
| alias  | 是   | string | 分类别名 |

#### 返回示例

```json
{
  "status": 0,
  "message": "更新分类信息成功！"
}
```

#### 返回参数说明

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 5 文章管理

### 5.1 发布新文章

#### 简要描述

- 发布新文章

#### 请求的URL地址

- `/my/article/add`

#### 请求方式

- POST

#### Header

```js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJ3d3d3IiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IjExMTExMTExIiwiZW1haWwiOiIxMjEyMTIxM0BxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2Mzc2MDU3OCwiZXhwIjoxNjYzNzk2NTc4fQ.WoLIJfkG34dywWFX9Yp82qYBYW1g4zclv3XBNulhQNU
```

#### 请求体（FormData 格式）：

| 参数名    | 必选 | 类型       | 说明                         |
| :-------- | :--- | :--------- | ---------------------------- |
| title     | 是   | string     | 文章标题                     |
| cate_id   | 是   | int        | 所属分类 Id                  |
| content   | 是   | string     | 文章内容                     |
| cover_img | 是   | blob二进制 | 文章封面                     |
| state     | 是   | string     | 状态，可选值为：已发布、草稿 |

#### 返回示例

```json
{
    status: 0,
    message: '发布新文章成功！'
}
```

#### 返回参数说明

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

#### 备注

- 由于此接口涉及到文件上传的功能，因此提交的请求体，必须是 `FormData` 格式！