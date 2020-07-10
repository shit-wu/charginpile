<template>
  <div class="managementtable">
    <el-table :data="tableData" max-height="600" border style="width: 75%">
      <el-table-column
        v-for="(item,key) in tableKey"
        :key="key"
        :prop="item.value"
        :label="item.name"
        :width="item.width"
        class="table-column"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ManagementTable",
  props: ["tableData", "tableKey"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.table-column {
  width: 80%;
  font-size: 20px;
}
</style>