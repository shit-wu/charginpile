<template>
  <div id="management">
    <ManagementTable :tableData="tableData" :tableKey="tableKey" />
  </div>
</template>

<script>
import ManagementTable from "./ManagementTable";
import axios from "axios";
import qs from "qs";

export default {
  name: "Management",
  components: {
    ManagementTable
  },
  data() {
    return {
      tableData: [],
      tableKey: [
        {
          name: "ID",
          value: "id",
          width: 100
        },
        {
          name: "别名",
          value: "name",
          width: 100
        },
        {
          name: "电压(V)",
          value: "voltage",
          width: 100
        },
        {
          name: "电流(A)",
          value: "current",
          width: 100
        },
        {
          name: "session",
          value: "session",
          width: 100
        },
        {
          name: "X位置",
          value: "position_x",
          width: 100
        },
        {
          name: "Y位置",
          value: "position_y",
          width: 100
        },
        {
          name: "状态",
          value: "online",
          width: 200
        }
      ]
    };
  },
  methods: {
    getData() {
      axios({
        method: "get",
        url: "/api/supplier/list",
        headers: {
          Authorization:
            "Bearer" + " " + sessionStorage.getItem("Authorization")
        }
      })
        .then(res => {
          let defer = res.data.data.map(v => {
            return new Promise((resolve, reject) => {
              axios
                .get("/api/supplier/status?id=" + v.id, {
                  headers: {
                    Authorization:
                      "Bearer" + " " + sessionStorage.getItem("Authorization")
                  }
                })
                .then(res => {
                  resolve({ ...v, ...res.data.data });
                })
                .catch(err => {
                  reject();
                });
            });
          });

          Promise.all(defer).then(resolved => {
            // console.log(resolved);
            this.tableData = resolved;
            console.log(this.tableData);
            for (var i = 0; i < this.tableData.length; i++) {
              if (this.tableData[i].online === true) {
                this.tableData[i].online = "正在使用中";
              } else {
                this.tableData[i].online = "已停止使用";
              }
            }
            return this.tableData;
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created: function() {
    this.getData();
  }
};
</script>

<style scoped>
.el-table .danger-row {
  background: crimson;
}
.el-table .warning-row {
  background: rgb(246, 246, 143);
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>