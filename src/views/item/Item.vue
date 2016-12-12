<template>
    <div class="container-fluid">

        <div class="row yh-panel">

            <form role="form" style="margin-top: 10px">

                <div class="form-group col-md-2 col-sm-4">
                    <div class="input-group">
                        <div class="input-group-addon">ID</div>
                        <input class="form-control" type="email" placeholder="ID" v-model="menu.id">
                    </div>
                </div>

                <div class="form-group col-md-2 col-sm-4">
                    <div class="input-group">
                        <div class="input-group-addon">名称</div>
                        <input type="password" class="form-control" placeholder="菜单名称" v-model="menu.name">
                    </div>
                </div>

                <div class="form-group col-md-2 col-sm-4">
                    <div class="input-group">
                        <div class="input-group-addon">级别</div>
                        <select class="form-control" v-model="menu.level">
                            <option value="1">一级</option>
                            <option value="2">二级</option>
                        </select>
                    </div>
                </div>

            </form>

            <div class="form-group col-md-3 col-sm-4">
                <button type="submit" class="btn btn-default btn-primary" @click="query">查询</button>
                <button type="submit" class="btn btn-default" @click="reset">重置</button>
            </div>

        </div>

        <div class="row yh-panel">

            <div class="yh-op" style="margin: 15px;">
                <router-link to="/item/" class="btn btn-default btn-primary">新增菜单</router-link>
            </div>

            <div class="container-fluid">

                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>名称</th>
                        <th>地址</th>
                        <th>级别</th>
                        <th>编码</th>
                        <th>排序</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                    </thead>

                    <tbody>

                    <tr v-for="menu in menus">
                        <td>{{menu.id}}</td>
                        <td>{{menu.name}}</td>
                        <td>{{menu.url}}</td>
                        <td>{{menu.parentMenu == null ? "一级" : "二级"}}</td>
                        <td>{{menu.code}}</td>
                        <td>{{menu.sort}}</td>
                        <td>{{menu.status == 1 ? "正常" : "禁用"}}</td>
                        <td>
                            <button class="btn btn-default btn-danger">删除</button>
                            <button class="btn btn-default">禁用</button>
                        </td>
                    </tr>

                    </tbody>

                </table>
            </div>

        </div>

    </div>
</template>

<script>

    export default{
        data(){
            return {
                menu: {
                    msg: 'item',
                    id: "",
                    name: "",
                    level: 1,
                },
                menus: [],
                pageNo: 1,
                pageSize: 15
            }
        },
        methods: {
            add () {
                console.log("..");
            },
            query () {
                console.log("查询");
            },
            reset () {
                console.log("重置");
            }
        },
        created () {
            this.$http.get("http://localhost:8088/sprhbm-demo/menus/", {
                params: {
                    pageNo: this.pageNo,
                    pageSize: this.pageSize
                }
            }).then((response) => {
                let respBody = response.body;
                if(respBody.status) {
                    this.menus = respBody.result.data;
                }
            }, (response) => {

            });

        }
    }

</script>