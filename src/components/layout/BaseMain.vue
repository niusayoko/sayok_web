<template>
  <el-table
    :data="tableData5"
    style="width: 100%"
    :default-sort="{prop: 'id', order: 'ascending'}"
    @row-click="toProductDetail">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-table
          :data="props.row.application_list"
          style="width: 100%"
          :default-sort="{prop: 'appId', order: 'ascending'}"
          >
          <el-table-column
            prop="appId"
            label="应用id"
            width="180"
            sortable>
          </el-table-column>
          <el-table-column
            prop="appName"
            label="应用名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="appDesc"
            label="应用描述">
          </el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column
      label="产品 ID"
      prop="id"
      sortable>
    </el-table-column>
    <el-table-column
      label="产品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="描述"
      prop="desc">
    </el-table-column>
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    data:function () {
      return {
        tableData5: [{
          id: '12987122',
          name: 'JCI',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          application_list: [{
            appId: 111,
            appName: 'jci_product_web',
            appDesc: '荷兰优质淡奶，奶香浓而不腻'
          }, {
            appId: 222,
            appName: 'jci_product_service',
            appDesc: '荷兰优质淡奶，奶香浓而不腻'
          }, {
            appId: 333,
            appName: 'jci_product_test',
            appDesc: '荷兰优质淡奶，奶香浓而不腻'
          }]
        }, {
          id: '12987123',
          name: '项目管理平台',
          desc: '荷兰优质淡奶，奶香浓而不腻',
        }, {
          id: '12987125',
          name: '工单系统',
          desc: '荷兰优质淡奶，奶香浓而不腻',
        }, {
          id: '12987126',
          name: 'JCS代码扫描',
          desc: '荷兰优质淡奶，奶香浓而不腻',
        }, {
          id: '12987126',
          name: 'JMC移动端持续集成',
          desc: '荷兰优质淡奶，奶香浓而不腻',
        }]
      }
    },
    methods: {
      toProductDetail(row, event, column) {
        console.log(row.id);
        this.$router.push({path: '/product'});
      }
    }
  }
</script>
