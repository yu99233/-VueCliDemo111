

<template>
  <div>
    <div class="modal fade" tabindex="-1" role="dialog" id="modal_del">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">Modal title</h4>
          </div>
          <div class="modal-body">
            <p>是否要删除该条数据&hellip;</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="SureDel">确定</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { Notice } from "iview";

export default {
  data() {
    return {
      Id: ""
    };
  },
  methods: {
    Show(Id) {
      debugger;
      this.Id = Id;
      console.log("删除id", this.Id);
      $("#modal_del").modal("show");
    },
    Hide() {
      $("#modal_del").modal("hide");
    },
    SureDel() {
      debugger;
      $.ajax({
        type: "post",
        url: "http://localhost:5502/api/values/delete",
        dataType: "json",
        data: { "": this.Id },
        success: data => {
          this.$success("成功");
          this.Hide();
          this.$emit("Func");
        },
        error: error => {
          this.$error("错误");
        }
      });
    }
  },
  mounted() {
    this.$Notice.config({
      top: 50,
      duration: 3
    });
  }
};
</script>

<style scoped>
</style> 