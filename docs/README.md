# TODO

## Milestone 1: 文档，项目初始化

- [x] 确认 eav 模型的 datetype 的关联类型
- [x] 初始化 phoenix
- [ ] 构建 models
- [ ] SQL 实现：详情页，列表筛选页
- [x] 决定是否使用 liveview

## Milestone 2: 添加 User

- [ ] 添加用户注册
- [ ] 用户头像信息替换

## Milestone 3: 录入手术信息

- [ ] 为《手术与操作编码标准》创建 schema 的 seed
- [ ] 编写导入脚本，导入《手术与操作编码标准》

## Milestone 3: 条目编辑，创建和筛选条目

- [ ] 添加 /subjects/{id}，实现条目详情的简单介绍
- [ ] 添加 /subjects/{id}/edit，实现条目详情的简单介绍
- [ ] 添加 /search，接入搜索
- [ ] 添加 /new_subject， 添加条目
- [ ] 添加 /explore， 筛选页

# 资料

## wikidata

https://www.wikidata.org/wiki/Wikidata:Introduction

Wikidata data 类型： https://www.wikidata.org/wiki/Help:Data_type#Datatypes_to_link_entities
String-based data types: String/Monolingual text/External identifier/URL
files: media/Geographic shape/tabular
notations: math/Musical
other: Quantity/Time/Globe coordinate
plan: duration(HH:MM:SS)/

Q: 为什么 wikidata 没有接入 boolean 类型?


## magento
https://yegorshytikov.medium.com/magento-eav-database-architecture-20b25c09af98


值的排序：

    虽然 Wikibase 总是以特定顺序（默认插入顺序）存储值，但值的顺序通常并不暗示任何语义。语义顺序是通过限定词来表达的，例如：
    series ordinal (P1545)限定 order of has part(s) (P527)值，例如United States Constitution (Q11698) has part(s) (P527) Article Of United States Constitution (Q48416) series ordinal (P1545) 1或
    基于时间的限定符，如发布日期(P577)来限定软件版本标识符(P348)值

EntitySchema 实体架构: https://www.wikidata.org/wiki/Wikidata:Database_reports/EntitySchema_directory

## 《手术与操作编码标准》

http://www.nhc.gov.cn/cmsresources/mohbgt/cmsrsdocument/doc16707.pdf

## 手术操作分类代码国家临床版3.0.xlsx

https://www.xyeyy.com/5/40/126/588/content_65614.html

http://www.nhc.gov.cn/wjw/wsbzxx/wsbz.shtml

https://code.nhsa.gov.cn/jbzd/public/dataOperationSearch.html?batchNumber=
