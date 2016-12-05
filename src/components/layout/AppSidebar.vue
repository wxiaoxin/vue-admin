<template>
    <aside class="app-sidebar">

        <ul>

            <li>主页</li>

            <li>
                <a href="#" id="itemA" onclick="f()"><span>商品</span></a>
                <ul id="itemUl">
                    <li><a href="#">商品详情</a></li>
                    <li><a href="#">商品图</a></li>
                    <li><a href="#">商品价格</a></li>
                </ul>
            </li>

            <li>
                <a href="#" id="OrderA"><span>订单</span></a>
                <ul>
                    <li><a href="#">订单详情</a></li>
                    <li><a href="#">订单图片</a></li>
                    <li><a href="#">订单价格</a></li>
                </ul>
            </li>

        </ul>

    </aside>

</template>

<script>

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }

</script>

<style>

.app-sidebar {
    top: 50px;
    width: 180px;
    height: 100%;
    padding: 10px;
    position: fixed;
    background: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
    z-index: 1023
}



</style>
