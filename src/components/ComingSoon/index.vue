<!--  -->
<template>
  <div class="movie_body">
    <Loading v-if="isLoading"/>
    <Scroller v-else>
    <ul>
      <li class="pullDown">{{pullDownMsg}}</li>
      <li v-for="item in comingList" :key="item.id">
        <div class="pic_show">
          <img :src="item.img|setWH('128.180')" />
        </div>
        <div class="info_list">
          <h2>{{item.nm}}<img v-if="item.version" src='@/assets/maxs.png'></h2>
          <p>
            <span class="person">{{item.wish}}</span> 人想看
          </p>
          <p>主演: {{item.star}}</p>
          <p>{{item.rt}}上映</p>
        </div>
        <div class="btn_pre">预售</div>
      </li>
    </ul>
    </Scroller>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "ComingSoon",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        comingList:[],
        pullDownMsg:'',
        isLoading:true,
        prevCityId:-1
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      // this.axios.get('/api/movieOnInfoList?cityId=10').then((res)=>{
      //     var msg=res.data.msg;
      //     if(msg==='ok'){
      //         this.comingList=res.data.data.movieList;
      //         this.isLoading=false;
      //         // console.log(this.comingList);
      //     }
      // })
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {
    var cityId=this.$store.state.city.id;
    if(cityId===this.prevCityId){return;}
    this.isLoading=true;
    this.axios.get('/api/movieOnInfoList?cityId='+cityId).then((res)=>{
          var msg=res.data.msg;
          if(msg==='ok'){
              this.comingList=res.data.data.movieList;
              this.isLoading=false;
              this.prevCityId=cityId
              // console.log(this.comingList);
          }
      })
  } //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pullDown{margin:0;padding:0;border:none;}
</style>