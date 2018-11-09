<template>
  <div class="businessCode">
    <p>商家入驻登记</p>
    <el-form ref="form" :model="form"  class="formData" lobel-width="5px">
      <el-form-item class="formItem">
        <input v-model="form.shopName" type="text" name="firstname" placeholder="店铺名称">
      </el-form-item>
      <el-form-item class="formItem" >
        <input v-model="form.principal" type="text" name="firstname" placeholder="负责人姓名">
      </el-form-item>
      <el-form-item class="formItem" >
        <input v-model="form.shopPhone" type="text" name="firstname" placeholder="联系电话">
      </el-form-item>
      <el-form-item class="formItem">
        <textarea v-model="form.adress" name="txt" placeholder="店铺地址" warp="virtual"></textarea>
      </el-form-item>
      <el-form-item class="formItem newForm" >
        <input v-model="form.code" type="text" name="firstname" class="CodeInput" placeholder="短信验证码">
        <button type="button" class="button CodeButton" @click="verification(form)">{{title}}</button>
      </el-form-item>
      <el-form-item  class="formItem formItem1">
        <el-checkbox v-model="form.chain" label="是否连锁" :border='true'></el-checkbox>
        <el-checkbox v-model="form.online" label="上否上线" :border='true'></el-checkbox>
        <el-checkbox v-model="form.license" label="是否有执照" :border='true'></el-checkbox>
      </el-form-item>
      <el-form-item class="formItem">
        <button type="button" class="button" @click="updata(form)">提交</button>
        <!-- <button type="button" class="button" @click="query">查询所有</button> -->
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
export default {
  data () {
    return {
      title:"获取验证码",
      form:{
        shopName:null,//店铺名字
        adress:null,//店铺地址
        shopPhone:null,//店铺联系电话
        principal:null,//店铺负责人姓名
        chain:false,//店铺连锁状态：是或者否
        online:false,//店铺是否上线
        license:false,//店铺是否有营业执照
        code:null//验证码提交
      }
    }
  },
  created () {

  },
  methods:{
    verification(form) {//获取验证码
      console.log(form)
      this.$api('sendSms',{params:{phone:form.shopPhone}}).then((res)=>{
        console.log(res);
        if(res.data.retCode==200) {
          this.title = "短信已发送"
        }
      })
    },
    query() {
      this.$api('findByAll').then((res)=>{
        console.log(res);
      })
    },
    checkMobile() {
      var sMobile = this.form.shopPhone;
      if (!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(sMobile))) {
          return false;
      } else return true;
    },
    updata (form) {
      // console.log(form);
      if(form.chain) {
        form.chain = 1;
      }else{
        form.chain = 0;
      }
      if(form.online) {
        form.online = 1
      }else{
        form.online = 0
      }
      if(form.license) {
        form.license = 1
      }else {
        form.license = 0
      }
      console.log(form)
      const isPhone = this.checkMobile();
      if(isPhone) {
        this.$api('insertShop',{
          name:form.shopName,
          address:form.adress,
          contacts:form.principal,
          phone:form.shopPhone,
          ifchain:form.chain,
          ifonline:form.online,
          code:form.code,
          iflicense:form.license}).then((res)=>{
          console.log(res);
          if(res.data.retCode==200) {
            alert('提交成功')
            for(var i = 0;i<this.form.length;i++) {
              this.form[i] = null
            }
            form.shopName = null;
            form.adress = null;
            form.principal = null;
            form.shopPhone = null;
            form.chain = null;
            form.code = null;
            form.license = null;
          }else{
            for(var i = 0;i<this.form.length;i++) {
              console.log(form[i])
              form[i] = null
            }
            alert('提交失败，，请重新尝试')
            form.shopName = null;
            form.adress = null;
            form.principal = null;
            form.shopPhone = null;
            form.chain = null;
            form.code = null;
            form.license = null;
          }
        })
      }else {
        alert ('请输入正确的手机号')
        this.form.shopPhone = null;
      }
      
    }
  }
}
</script>
<style scoped>
  .businessCode {
    background-image: url('../../static/images/chaojiku.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height:1334px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center
  }
  p{
    font-size:60px;
  }
  .formData{
    width: 100%;
  }
  input,textarea {
    width: 100%;
    height:65px;
    margin-top: 10px;
    text-align: center;
    vertical-align:middle;
    font-size:26px;
    font-family:PingFang-SC-Regular;
    color:black;
    border: none;
    outline: none;
  }
  .CodeInput {
    width: 60%;
  }
  textarea,input::-ms-input-placeholder {
    text-align: center;
  }
 
  textarea,input::-webkit-input-placeholder {
      text-align: center;
  }
  .el-input__inner {
    width: 50%;
    text-align: center;
  }
  input,button,textarea {
    border: none;
    vertical-align: middle;
  }
  .formItem{
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
   .button {
    width: 93%;
    background-color:#f29653;
    border-radius: 60px;
    color:white;
    height:100px;
  }
  .CodeButton {
    width: 30%;
    margin-top: 10px;
    height: 65px;
    font-size: 30px;
    color:rgba(44,206,143,1);
    background:rgba(244,250,248,1);
    border-radius:24px;
  }
  .formItem1 {
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
</style>

