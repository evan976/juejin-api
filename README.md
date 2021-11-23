# juejin-api

掘金 API，仅供学习使用！

## 说明

**接口根地址：`http://localhost:8000/api/v1`**

**服务端已开启 cors 跨域**

## 获取首页文章列表

请求方式：GET

接口地址：`/articles/index_list`

请求方式：`GET`

查询参数：
  `cate_id` - 分类 id
  `cursor` - 分页标识，加载下一页传入
  `limit` - 限制条数
  `sort_type` - 排序类型， 0：全部、3：三天内、7：7天内、30：30天内、200：热门、300：最新
  `feed_type` - all：推荐，cate：分类

例如：`/articles/index_list?cate_id=6809637769959178254`
## 获取文章详情

接口地址：`/articles/detail`

请求方式：`GET`

查询参数：`article_id` - 文章 id

例如：`/articles/detail?article_id=7033585766752223240`