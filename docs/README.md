# TODO

- [ ] 确认 eav 模型的 datetype 的关联类型
- [ ] 构建 models
- [ ] 编写 Seed
- [ ] SQL 模拟：

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
