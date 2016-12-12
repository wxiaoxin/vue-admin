<template>
    <div class="container-fluid">

        <div class="row yh-panel">

            <div>
                <h4>{{msg}}</h4>
            </div>

            <form class="form-horizontal" role="form" style="margin: 15px;">

                <div class="form-group">
                    <label for="name" class="col-md-1 control-label"><span>*</span> 菜单名称</label>
                    <div class="col-md-2">
                        <input type="text" class="form-control" id="name" v-model="menu.name">
                    </div>
                </div>

                <div class="form-group">
                    <label for="url" class="col-md-1 control-label"><span>*</span> 链接地址</label>
                    <div class="col-md-2">
                        <input type="text" class="form-control" id="url" v-model="menu.url">
                    </div>
                </div>

                <div class="form-group">
                    <label for="level" class="col-md-1 control-label"><span>*</span> 菜单级别</label>
                    <div class="col-md-2">
                        <select id="level" class="form-control" v-model="menu.level">
                            <option value="1">一级</option>
                            <option value="2">二级</option>
                        </select>
                    </div>
                </div>

                <div class="form-group" v-show="menu.level == 2">
                    <label for="parent" class="col-md-1 control-label"><span>*</span> 父级菜单</label>
                    <div class="col-md-2">
                        <select id="parent" class="form-control" v-model="menu.parent">
                            <option value="-1">选择</option>
                            <option>父级一</option>
                            <option>父级一</option>
                            <option>父级一</option>
                            <option>父级一</option>
                            <option>父级一</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="code" class="col-md-1 control-label">菜单编码</label>
                    <div class="col-md-2">
                        <input type="text" class="form-control" id="code" v-model="menu.code">
                    </div>
                </div>

                <div class="form-group">
                    <label for="sort" class="col-md-1 control-label">排序</label>
                    <div class="col-md-2">
                        <input type="text" class="form-control" id="sort" v-model="menu.sort">
                    </div>
                </div>

                <div class="form-group">
                    <label for="status" class="col-md-1 control-label">启用</label>
                    <div class="col-md-2">
                        <select class="form-control" id="status" v-model="menu.status">
                            <option value="1">启用</option>
                            <option value="0">禁用</option>
                        </select>
                    </div>
                </div>

            </form>

            <div class="form-group">
                <div class="col-md-2 col-md-offset-1">
                    <button type="button" class="btn btn-default btn-primary" @click="save">提交</button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

    export default{
        data(){
            return {
                msg: "新增菜单",
                menu: {
                    // id
                    id: this.$route.params.id,
                    // 菜单名称
                    name: "",
                    // 菜单级别
                    level: 1,
                    // 链接地址
                    url: "",
                    // 父级菜单
                    parent: "-1",
                    // 菜单编码
                    code: "",
                    // 排序
                    sort: 0,
                    // 状态
                    status: 1
                }
            }
        },
        watch : {
            // 前期不加字段校验
        },
        methods: {
            save() {
                console.log(this.menu);
                this.$http.post("http://localhost:8088/sprhbm-demo/menus/", {
                    params: this.menu
                }).then((response)=> {
                    let respBody = response.body;
                    if(respBody.status) {
                        alert("保存成功！");
                    }
                }, (response) => {
                    alert("请求失败！");
                })
            }
        },
        created () {
            // 获取二级菜单
            let id = this.$route.params.id;
            if(id != null) {
                this.id = id;
                this.$http.get("http://127.0.0.1:8080/menu/" + id).then((response) => {

                }, (response) => {

                });
            }
        }
    }

</script>


<style>

</style>