<template>
    <div id="activity" ref="activity">
        <img src="../../static/images/wechatOne.png" alt="">
        <span></span>
    </div>
</template>
<script>
export default {
    data () {
        return {
          img1:'',
          clientHeight:'',
        }
    },
    created () {
        // this.queryHeight();
    },
    mounted() {
        this.clientHeight = `${document.documentElement.clientHeight}`
        console.log(self.clientHeight);
        window.onresize = function temp () {
            this.clientHeight = `${document.documentElement.clientHeight}`;
        };
    },
    watch:{
        clientHeight:function () {
            this.changeFixed(this.clientHeight)
        }
    },
    methods: {
        changeFixed(clientHeight){                        //动态修改样式
        console.log(clientHeight);
        this.$refs.activity.style.height = clientHeight+'px';

        },
    }
}
</script>
<style scoped>
    #activity{
        width: 100%;
        height:1240px;
        /* max-height: 1624px;
        padding-bottom: 292px; */
        background-color:#222fac;
    }
    img{
        width: 100%;
    }
    /* span{
        display: inline-block;
        width: 100%;
        height: 146px;
        margin-top:-20px;
    } */
</style>