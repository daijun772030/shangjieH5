<template>
    <div class="dowm">

    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    created () {
        this.queryUser();
    },
    methods:{
        queryUser() {
            window.location.href = 'http://www.pigcome.com/wechat/download'
    //         var u = navigator.userAgent;
    //         var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
    //         var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
    //         var webKit = u.indexOf('AppleWebKit') > -1; /*苹果、谷歌内核*/
    //         var mobile = !!u.match(/AppleWebKit.*Mobile.*/); /*是否为移动终端*/
    //         var weixin= u.toLowerCase().indexOf('micromessenger') > -1 /*是否是微信*/
    //         if(isiOS) {
    //             window.location.href="https://itunes.apple.com/cn/app/%E6%87%92%E7%8C%AA%E5%88%B0%E5%AE%B6/id1435420262?mt=8"
    //         } 
    //         if(isAndroid){
    //             Window.location.href="https://m.wandoujia.com/apps/com.example.sjkj"
    //         }
    //     }
    // }
}
}
}
</script>
<style scoped>
</style>