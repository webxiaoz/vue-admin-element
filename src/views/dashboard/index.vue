<template>
  <div class="wrap">
    <el-row :gutter="20" style="">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6"
              v-for="(item,index) in tabList"
              :key="index"
              class="top-banner"
      >
        <div class="top-banner-item">
          <p class="num">{{item.num}}</p>
          <p class="title">{{ item.label }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      tabList: [{
        label: '今日访问量',
        value: 0,
        num:'233'
      }, {
        label: '昨日访问量',
        value: 1,
        num:'98'
      }, {
        label: '历史访问量',
        value: 2,
        num: '6455'
      }, {
        label: '历史订单量',
        value: 3,
        num:'38991'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.top-banner{
  text-align: center;
  min-height: 60px;
  margin-bottom: 10px;
  .top-banner-item{
    box-shadow: 0px 0px 12px 0px rgba(94, 103, 123, 0.1);
    background: #FFFFFF;
    padding: 20px 0;
    .title{
      font-size: 16px;
    }
    .num{
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>