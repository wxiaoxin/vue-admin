<template>
    <div>

        <div class="search-panel box">

            dsfajsjdfkajs;dkfj

        </div>

        <div class="box">
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

    .search-panel {
        margin-bottom: 22px;
    }

    .box {
       background: #fff;
       padding: 5px;
       border-radius: 5px;
       box-shadow: 0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);
       margin-right: 5px;
    }




</style>