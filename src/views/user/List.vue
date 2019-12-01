<template>
  <div>
    <h1>用户列表</h1>

    <div id="search_div">
      <div class="col-md-10 search_tab">
        <table id="search">
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  class="form-control"
                  placeholder="用户名"
                  v-model="UserModel.UserName"
                />
              </td>
              <td>
                <input type="text" class="form-control" placeholder="姓名" v-model="UserModel.Name" />
              </td>
              <td>
                <input type="text" class="form-control" placeholder="年龄" v-model="UserModel.Age" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-2 search_btn">
        <button class="btn btn-primary" @click="AddUser">新增</button>
        <button class="btn btn-success" @click="GetUserList">搜索</button>
      </div>
    </div>

    <table class="table table-bordered" id="tab_userlist">
      <thead>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>地址</th>
          <th>用户名</th>
          <th>密码</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in userList" :key="item.Id">
          <td>{{item.Name}}</td>
          <td>{{item.Age}}</td>
          <td>{{item.Adress}}</td>
          <td>{{item.UserName}}</td>
          <td>{{item.Pwd}}</td>
          <td>{{item.CreateTime | DatetimeFormat}}</td>

          <td>
            <button type="button" class="btn btn-primary btn-xs">修改</button>
            <button type="button" class="btn btn-danger btn-xs" @click="DelThisData(item.Id)">删除</button>
            <button type="button" class="btn btn-warging btn-xs" @click="GoDetail(item.Id)">详情</button>
          </td>
        </tr>
      </tbody>
    </table>

    <DelModal ref="childFunc" @Func="GetUserList"></DelModal>
  </div>
</template>


<script>
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import DelModal from "../common/delete";
export default {
  data() {
    return {
      UserModel: {
        Name: "",
        Age: "",
        Adress: "",
        UserName: "",
        Pwd: "",
        pageIndex: 1
      },
      userList: [],
      total: 0
    };
  },
  components: {
    DelModal
  },
  methods: {
    GetUserList() {
      $.ajax({
        type: "post",
        url: "http://localhost:5502/api/values/getuserlist",
        dataType: "json",
        data: this.UserModel,
        success: data => {
          console.log(data);
          this.userList = data.Item1;
          this.total = data.Item2;
        },
        error: error => {
          console.log(error);
        }
      });
    },
    DelThisData(Id) {
      this.$refs.childFunc.Show(Id);
    },
    AddUser() {},
    GoDetail(id) {
      let routeUrl = this.$router.resolve({
        path: "/user/detail/:id/:name",
        query: { id: 96,name:'姓名' }
      });
      window.open(routeUrl.href, "_blank");
    }
  },
  mounted() {
    this.GetUserList();
  }
};
</script>

<style lang="less" scoped>
#search td {
  padding-left: 20px;
  padding-bottom: 20px;
}
// #search_div {
//   display: flex;
//   justify-content: space-between;
// }

#tab_userlist {
  td:last-child {
    width: 12%;
    text-align: center;
  }
  td button:not(:first-child) {
    margin-left: 6px;
  }
}

.search_btn button:not(:first-child) {
  margin-left: 6px;
}
</style>