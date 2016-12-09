<template>
    <div>
        <h1>{{title}}</h1>

        <h4>{{count}}</h4>
        <h4>{{countAlias}}</h4>
        <h4>{{countPlusLocalState}}</h4>

    </div>
</template>



<script>

    import {mapState} from "vuex";

    export default{
        data(){
            return{
                title:"主页",
                localCount: 100
            }
        },
        computed: mapState({
            count: state => state.count,
            countAlias: "count",
            countPlusLocalState (state) {
                return state.count + this.localCount;
            }
        })
    }

</script>
