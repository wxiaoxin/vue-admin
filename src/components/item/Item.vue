<template>
    <div class="container-fluid">


        <div class="row">

            <div class="yh-panel col-md-2 col-sm-2">
                <h3>{{msg}}</h3>
            </div>

            <div class="yh-panel col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1">
                <h3>item2</h3>
            </div>

        </div>


        <div class="row">

            <div class="yh-panel col-md-2">
                <h3>{{msg}}</h3>
            </div>

            <div class="yh-panel col-md-3 col-md-offset-1">
                <h3>item2</h3>
            </div>

        </div>

        <div class="row yh-panel">

            <h1>{{msg}}</h1>

            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>操作</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>1</td>
                    <td>a</td>
                    <td>
                        <router-link to="/item/1">详细</router-link>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>b</td>
                    <td>
                        <router-link to="/item/2">详细</router-link>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>c</td>
                    <td>
                        <router-link to="/item/3">详细</router-link>
                    </td>
                </tr>

                </tbody>

            </table>

        </div>

    </div>
</template>

<script>

    export default{
        data(){
            return {
                msg: 'item'
            }
        }
    }

</script>


<style>

.row {
    margin-bottom: 12px;
}

.yh-panel {
    background: #fff;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 1px 2px hsla(0, 0%, 7%, 0.4);
}


</style>