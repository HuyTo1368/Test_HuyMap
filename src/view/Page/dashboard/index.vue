<template>
  <div class="dashboard">
    <div class="dashboard-create">
      <el-button type="success" @click="clickCreateForm">
        <i class="el-icon-plus"></i>
        <span>
          Cretae
        </span>
      </el-button>
    </div>
    <div class="dashboard-content">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="id"
          label="ID"
          width="80">
        </el-table-column>
        <el-table-column
          prop="date"
          label="Full name"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="Label"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="Category"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Date">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, 
        {
          id: 2,
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, 
        {
          id: 3,
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          id: 4,
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
    }
  },
  methods: {
    clickCreateForm() {
      console.log(this.$router);
      
      // this.$router.push('/create');
    }
  }
}
</script>

<style>
.dashboard {
  background-color: #fff;
  height: 100%;
  width: 100%;
  padding: 24px;
  box-sizing: border-box;

  .dashboard-create {
    display: flex;
    justify-content: end;
  }
}
</style>