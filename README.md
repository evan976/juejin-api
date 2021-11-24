# juejin-api

掘金 API，仅供学习使用！

## 说明

**接口根地址：`http://localhost:8000/api/v1`**

**已开启 cors 跨域**

## 文章

### 获取首页文章列表

接口地址：`/articles/index_list`

请求方式：`POST`

请求体参数：

- `cate_id` - 分类 id

- `cursor` - 分页标识

- `limit` - 限制条数

- `sort_type` - 排序类型， 0：全部 3：三天内 7：7天内 30：30天内 200：热门 300：最新

- `feed_type` - all：推荐，cate：分类


### 获取文章详情

接口地址：`/articles/detail`

请求方式：`GET`

查询参数：

- `article_id` - 文章 id

例如：`/articles/detail?article_id=7033585766752223240`

### 获取相关文章

接口地址：`/related_entry`

请求方式：`POST`

请求体参数：

- `item_id` - 文章 id

- `user_id` - 用户 id

- `tag_ids` - 标签 id，可传多个，数组字符串形式传入，例如：`"tag_ids":["6809640399544516616", "6809640501776482317"]`

### 根据标签 id 获取相关推荐文章

请求地址：`/articles/recommend_entry_by_tag_ids`

请求方式：`POST`

请求体参数：

- `cursor` - 分页标识

- `item_id` - 文章 id

- `sort_type` - 排序类型，0：全部 3：三天内 7：7天内 30：30天内 200：热门 300：最新

- `tag_ids` - 标签 id，可传多个，数组字符串形式传入，例如：`"tag_ids":["6809640399544516616", "6809640501776482317"]`

### 搜索文章

接口地址：`/articles/search`

请求方式：`GET`

查询参数：

- `id_type` - 0：综合 1：用户 2：文章 9：标签

- `key_word` - 关键词

- `limit` - 限制条数

- `search_type` - 0：全部 1：一天内 2：一周内 3：三个月内

例如：`/search?key_word=前端`

## 标签

### 获取标签列表

接口地址：`/tags/list`

请求方式：`POST`

请求体参数：

- `cursor`: 分页标识，字符串，默认 '40'

- `limit`: 限制条数，默认 20 条

- `sort_type`: 排序类型，0：全部 3：三天内 7：7天内 30：30天内 200：热门 300：最新

### 获取标签详情

接口地址：`/tags/detail`

请求方式：`POST`

查询参数：

- `key_word` - 关键词

例如：`/tags/detail?key_word=前端`


## 分类

### 获取分类列表

接口地址：`/categories/list`

请求方式：`GET`

查询参数：

- show_type - 0：首页 1：作者排行榜 2：小册

例如：`/categories/entry?show_type=0`

### 获取某个分类下的标签

接口地址：`/categories/tags`

请求方式：`POST`

请求体参数：

- `cate_id` - 分类 id
