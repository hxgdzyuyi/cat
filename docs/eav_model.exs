defmodule CatRepo.Migrations.InitCatTable do
  use Ecto.Migration

  @doc """
  instances 表
      name: [a-z0-9\-]
          - body_parts 躯体器官/部件
          - surgical_procedures 手术程序
          - clinical_specialties 临床学科
          - body_systems 躯体器官
          - surgical_approaches 手术入路
          - surgical_primary_procedures 手术主操作
      label:
          - 躯体器官/部件
          - 手术程序
          - 临床学科
          - 躯体器官系统
          - 手术与操作入路
          - 手术主操作
      subject_type:
          - bare: 类似演员，人体部位，这种只负责聚合的实体，不负责显示
          - bundle: 类似丛书这样的实体
          - simple: 普通的实体，拥有 action 功能
      review_action_config:
          - [(:scheduled, 将做),(:done, 做过)]
  """
  def up do
    create table("files") do
      add :key, :string
      add :size, :integer, default: 0
      add :width, :integer, default: 0
      add :height, :integer, default: 0

      # media_type: enum('UNKNOWN','BITMAP','DRAWING','AUDIO','VIDEO','MULTIMEDIA','OFFICE','TEXT','EXECUTABLE','ARCHIVE','3D')
      add :media_type, :string
      # major_mime: enum('UNKNOWN','application','audio','image','message','model','multipart','text','video')
      add :major_mime, :string
      add :minor_mime, :string
      add :sha1, :string

      # license: enum('UNKNOWN','COPYRIGHTED','PUBLIC_DOMAIN','CC','GPL','LGPL','BSD','APACHE','MIT','MPL','PUBLIC_DOMAIN_MARK','UNLICENSE')
      add :license, :string

      timestamps()
    end

    create table("instances") do
      add :name, :string, comment: "条目类型的名称，英文短语 [a-z0-9\-]"
      add :label, :string, comment: "条目类型的中文名称"
      add :subject_type, :string, comment: "条目类型"
      add :review_action_config, :string, comment: "标记条目的行为配置"

      timestamps()
    end

    create table("subjects") do
      add :instance_id, references("instances")

      add :title, :string, comment: "条目标题"
      add :summary, :string, comment: "条目简介"
      add :aliases, {:array, :map}, comment: "条目别名"

      add :cover_id, references("files"), comment: "封面图"

      timestamps()
    end

    create table("properties") do
      add :title, :string, comment: "属性中文名"

      timestamps()
    end

    create table("statements") do
      add :subject_id, references("subjects")
      add :property_id, references("properties")
      add :data_type, :string

      # value
      add :value_object_id, references("subjects")
      add :value_string, :string
      add :value_datetime, :datetime
      add :value_int, :integer
      add :value_decimal, :decimal
      add :value_text, :text
      add :value_file_id, references("files")

      timestamps()
    end

  end

  def down do
    drop table("statements")
    drop table("properties")
    drop table("subjects")
    drop table("instances")
    drop table("files")
  end
end
