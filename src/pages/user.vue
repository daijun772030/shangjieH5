<template>
  <div class="user">
    <div class="banner-logo">
      <img src="../../static/images/yaoqinghaoyou_lanzhudaojiatitou@2x.png" alt="">
    </div>
    <p class="banner-p">
      {{userText}}
    </p>
    <div class="banner-fg">
      <img src="../../static/images/yaoqinghaoyou_zhuangshi@2x.png" alt="">
    </div>
    <div  class="user-content">
      <img :src="yhImg.img1" alt="">
      <p v-if="disablet">
        <a href="http://www.pigcome.com">懒猪到家链接：http://www.pigcome.com</a></p>
      <input class="input" type="text" v-if="input1" placeholder="点击输入您的手机号" v-model="value">
        <button v-if="disable" @click="updata" class="button">点击领取</button>
    </div>
    <div class="user-text">
      <p>活动规则</p>
      <ul>
        <li>1.红包仅限懒猪到家新用户领取；</li>
        <li>2.同一手机号、同一设备、同一支付账号视为同一用户；</li>
        <li>3.新用户红包不与其他优惠叠加；</li>
        <li>4.您邀请的好友需通过懒猪到家app或懒猪到家小程序下单，通过其他渠道下单不发放邀请奖励；</li>
        <li>5.如有其它疑问请咨询懒猪到家客服。</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userId:null,
      type:null,
      input1:true,
      disable:true,
      disablet:false,
      userText:"88元新人红包等你来拿",
      value: '',
      yhImg:{
        img1:'../../static/images/yaoqinghaoyou_hongbaocahua_xinyonghuzhuangxiang@2x.png',
        img2:'../../static/images/yaoqinghaoyou_hongbaocahua_lingquchenggong@2x.png',
        img3:'../../static/images/yaoqinghaoyou_hongbaocahua_yilingqu@2x.png'
      }
    }
  },
  created () {
  },
  methods: {
     checkMobile() {
      var sMobile = this.value;
      if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))) {
          return false;
      } else return true;
    },
    GetRequest (url) {
      var props = [];
        if (url.indexOf("?") != -1) {    //判断是否有参数
            var parameters = url.split("?")[1]; 
            var parametersArr = parameters.split("&");
            for(var i = 0; i < parametersArr.length; i++) {
                props.push(parametersArr[i].split("="));
            }
        }
        return props;
    },
    getUrl () {
      // debugger;
      var url = location.href;
      this.GetRequest(url)
        var cs;
        var request = this.GetRequest(url)
        if(request != null || request.length >=2 || request.length>1) {
          cs = request[0][0]
          this.userId = cs;
        }
    },

    updata () {
      const isPhone = this.checkMobile();
      if(isPhone) {
        this.getUrl();
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
        var webKit = u.indexOf('AppleWebKit') > -1; /*苹果、谷歌内核*/
        var mobile = !!u.match(/AppleWebKit.*Mobile.*/); /*是否为移动终端*/
        var weixin= u.toLowerCase().indexOf('micromessenger') > -1 /*是否是微信*/
        if (isAndroid) {
          this.type = "0"
          this.$api('network',{params:{phone:this.value,type:this.type,userid:this.userId}}).then((res)=>{
            // debugger;
            var data = res.data;
            var text = data.split('(')[1]
            var text1 = text.split('"')[1]
            // debugger;
            if(text1 == '成功' ){
              this.userText = '邀好友 得5...元红包';
              this.disable = false;
              this.input1 = false;
              this.disablet = true;
              this.yhImg.img1 = this.yhImg.img2
            } else if (text1 == '该手机已被注册' ) {
              this.input1 = false
              this.yhImg.img1 = this.yhImg.img3;
              this.userText = '邀好友 得5...元红包'
              this.disable = false;
              this.disablet = true;
            }
          })
        }else if (isiOS) {
          this.type = "1"
          this.$api('network',{params:{phone:this.value,type:this.type,userid:this.userId}}).then((res)=>{
            // debugger;
            var data = res.data;
            console.log(data);
            var text = data.split('(')[1]
            var text1 = text.split('"')[1]
            // debugger;
            if(text1 == '成功' ){
              this.userText = '邀好友 得5...元红包';
              this.disable = false;
              this.input1 = false;
              this.disablet = true;
              this.yhImg.img1 = this.yhImg.img2
            } else if (text1 == '该手机已被注册' ) {
              this.input1 = false
              this.yhImg.img1 = this.yhImg.img3;
              this.userText = '邀好友 得5...元红包'
              this.disable = false;
              this.disablet = true;
            }
          })
        }else {
          
        }
      }else {
        alert ('请输入正确的手机号')
      }
      console.log(this.value)
    }
  }
}
</script>
<style scoped>
  #app>.user {
    background-image: url('../../static/images/yanqinghaoyou_dabeijing@3x.png');
    width: 100%;
    overflow: hidden;
    /* height: 20px; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .banner { 
    width: 100%;
  }
  .banner-logo{
    text-align: center;
  }
  .banner-logo>img{
    width:197px;
    height:51px;
    background:rgba(0,212,160,1); 
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .banner-p{
    text-align: center;
    height:50px;
    font-size:52px;
    font-family:DFLiJinHeiW8;
    font-weight:400;
    color:rgba(100,32,34,1);
    margin:38px auto;
  }
  .banner-fg{
    text-align: center;
  }
  .banner-fg>img{
    width: 390px;
    margin:0 auto;
  }
  .user-content {
    text-align: center;
    width: 594px;
    margin: 0 auto;
    padding-top: 30px; 
  }
  .user-content>img{
    width: 475px;
    height: 378px;
  }
  .user-content>.input{
    width: 100%;
    height:65px;
    margin-top: 38px;
    text-align: center;
    vertical-align:middle;
    font-size:26px;
    font-family:PingFang-SC-Regular;
    color:rgba(153,153,153,1);
    border: none;
    outline: none;
  }
  .user-content>.button {
    width: 100%;
    height:65px;
    margin-top: 22px;
    font-size:26px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    background:rgba(0,203,153,1);
    border-radius:2px;
    text-align: center;
    border:none;
    outline: none;
  }
  .user-content>p{
    margin: 51px 0 30px 0;
    width: 100%;
    text-align:center;
    font-size:26px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    text-decoration:underline;
    color:rgba(255,255,255,1);
  }
  a {
    text-decoration: underline;
    color:rgba(255,255,255,1);
  }
  .user-text {
    margin-bottom: 74px;
  }
  .user-text>p{
    padding: 41px 0 25px 0;
    text-align: center;
    height:29px;
    font-size:26px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);

  }
  .user-text>ul{
    margin: 0 auto;
    text-align: left;
    width:684px;
    /* height:365px; */
    display: flex;
    flex-direction: column;
    align-content:space-between;
  }
  .user-text>ul>li {
     font-size:24px;
    font-family:PingFang-SC-Regular;
    color:rgba(255,255,255,1);
    line-height:38px;
    padding: 20px;
  }
</style>


