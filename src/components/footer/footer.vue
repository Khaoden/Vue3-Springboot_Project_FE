<template>
  <footer>
    <div class="footer-container max1300">
      <div class="footer-ab">
        <div class="footer-b" style="cursor: pointer">
          <span class="footer-bli">
            <img
              class="footer-b1"
              src="https://img.alicdn.com/imgextra/i4/O1CN01iUHIi720lfkhXZFYf_!!6000000006890-2-tps-45-45.png"
            />
            <div class="footer-b2">
              <img
                class="max"
                src="https://img.alicdn.com/imgextra/i3/O1CN01tOHtxT1CsKj11emLN_!!6000000000136-2-tps-135-155.png"
              />
            </div>
          </span>
          <a
            href="https://weibo.com/u/1866863440"
            target="_blank"
            class="footer-bli"
          >
            <img
              class="footer-b1"
              src="https://img.alicdn.com/imgextra/i3/O1CN01SvQOup29TCJnz7Vqz_!!6000000008068-2-tps-45-45.png"
            />
          </a>
        </div>
      </div>
      <div class="footer-nav">
        <div class="footer-anvil">
          <div class="footer-c" data-name="新闻动态">新闻动态</div>
          <div class="footer-d"></div>
          <div class="footer-e">
            <div class="footer-eli">
              <a href="/news/list/1">活动新闻</a>
            </div>
            <div class="footer-eli">
              <a href="/news/reports/all">研究报告</a>
            </div>
          </div>
        </div>
        <div class="footer-anvil">
          <div class="footer-c" data-name="公益项目">公益项目</div>
          <div class="footer-d"></div>
          <div class="footer-e">
            <div class="footer-eli">
              <a href="/projects/platform">平台公益</a>
            </div>
            <div class="footer-eli">
              <a href="/projects/environmental-protection">绿水青山</a>
            </div>
            <div class="footer-eli">
              <a href="/projects/rural-revitalization">乡村振兴</a>
            </div>
            <div class="footer-eli">
              <a href="/projects/emergency-relief">应急救灾</a>
            </div>
            <div class="footer-eli">
              <a href="/projects/community-development">助残扶弱</a>
            </div>
            <div class="footer-eli">
              <a href="/projects/health">健康公益</a>
            </div>
            <div class="footer-eli">
              <a href="/projects/internationality">国际公益</a>
            </div>
          </div>
        </div>
        <div class="footer-anvil">
          <div class="footer-c" data-name="党建工作">党建工作</div>
          <div class="footer-d"></div>
          <div class="footer-e">
            <div class="footer-eli">
              <a href="/party-building">党支部简介</a>
            </div>
            <div class="footer-eli">
              <a href="/party-building/activities/list/1">党建活动动态</a>
            </div>
            <div class="footer-eli">
              <a href="/party-building/regulations">党建制度</a>
            </div>
          </div>
        </div>
        <div class="footer-anvil">
          <div class="footer-c" data-name="公开信息">公开信息</div>
          <div class="footer-d"></div>
          <div class="footer-e">
            <div class="footer-eli">
              <a href="/disclosure/info/regulations">规章制度</a>
            </div>
            <div class="footer-eli">
              <a href="/disclosure/info/annual-report">年度报告</a>
            </div>
            <div class="footer-eli">
              <a href="/disclosure/info/finance">财务信息</a>
            </div>
            <div class="footer-eli">
              <a href="/disclosure/info/donation-income">捐赠收入</a>
            </div>
            <div class="footer-eli">
              <a href="/disclosure/info/expenditure">重大资金支出情况</a>
            </div>
          </div>
        </div>
        <div class="footer-anvil">
          <div class="footer-c" data-name="关于我们">关于我们</div>
          <div class="footer-d"></div>
          <div class="footer-e">
            <div class="footer-eli">
              <a href="/about-us">基金会简介</a>
            </div>
            <div class="footer-eli">
              <a href="/about-us/council">理事会简介</a>
            </div>
            <div class="footer-eli">
              <a href="/about-us/honors">荣誉表彰</a>
            </div>
            <div class="footer-eli">
              <a href="/about-us/contact">联系我们</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-fg">
        <div class="footer-f">
          阿里巴巴版权所有1999-2024<a
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            >浙ICP备12037069号-1</a
          >
          <a href="https://www.beian.gov.cn/" target="_blank"
            >浙公网安备33010002000089</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
</script>

<style scoped>
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}

* {
  box-sizing: border-box;
}

footer {
  width: 100%;
  overflow-x: hidden;
}

.footer-container {
  background: #fff;
  padding: 0 auto; /* 添加左右内边距 */
  margin: 0 auto;
  width: 80%;
}

.footer {
  margin-top: 10%;
  border-bottom: 10px solid #f60;
  max-width: 100%;
}

.footer-ab {
  font-size: 0;
  width: 100%;
}

.footer-b {
  float: right;
}

.footer-bli {
  display: inline-block;
  margin-left: 15px;
  padding-bottom: 5px;
  position: relative;
}

.footer-b1 {
  opacity: 0.2;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

.footer-b2 {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 2px #ddd;
  display: none;
  padding: 5px;
  position: absolute;
  right: 0;
  top: 100%;
  width: 120px;
}

.footer-bli:hover .footer-b1 {
  opacity: 1;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

.footer-bli:hover .footer-b2 {
  display: block;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap; /* 允许在小屏幕上换行 */
  justify-content: space-between;
  margin-top: 30px;
  padding: 70px 0;
  width: 100%;
}

.footer-anvil {
  width: auto; /* 改为自动宽度 */
  max-width: 250px; /* 设置最大宽度 */
  margin-bottom: 20px; /* 添加底部外边距，以防在换行时重叠 */
  text-align: left; /* 确保文本内容左对齐 */
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .footer-nav {
    justify-content: flex-start;
  }

  footer-anvil {
    width: calc(33.33% - 20px); /* 在中等屏幕上每行显示3个 */
    margin-right: 20px;
  }
}

@media (max-width: 750px) {
  .footer-nav {
    display: block;
  }

  footer-anvil {
    width: 100%;
    max-width: none;
  }

  .footer-c,
  .footer-e a,
  .footer-f {
    font-size: 16px; /* 减小字体大小 */
  }
  .footer-b {
    display: none;
  }
}

.footer-c {
  color: #222;
  font-size: 20px;
  font-weight: 700;
}

.footer-d {
  background: #f60;
  border-radius: 3px;
  height: 5px;
  margin: 15px 0;
  width: 25px;
}

.footer-e a {
  color: #999;
  display: inline-block;
  font-size: 20px;
  margin-top: 5px;
}

.footer-e a:hover {
  color: #f60;
}

.footer-fg {
  margin-top: 30px;
  overflow: hidden;
}

.footer-f {
  color: #999;
  float: left;
  font-size: 20px;
}

.footer-f a {
  color: #999;
  display: inline-block;
  margin-left: 10px;
}

.footer-f a:hover {
  color: #f60;
}

.footer-g {
  border: 2px solid #ddd;
  border-radius: 20px;
  color: #999;
  display: inline-block;
  font-size: 14px;
  line-height: 35px;
  margin-left: 20px;
  text-align: center;
  width: 60px;
}

.footer-g:hover {
  border-color: #f60;
  color: #f60;
}

.footer-gif {
  bottom: 10%;
  max-width: 1.5rem;
  position: fixed;
  right: 5%;
  width: 150px;
  z-index: 999;
}

@media (max-width: 1200px) {
  .footer {
    padding: 60px 0;
  }

  .footer-nav {
    margin-top: 40px;
    padding: 40px 0;
  }

  .footer-c,
  .footer-e a,
  .footer-fg {
    font-size: 18px;
  }

  .footer-fg {
    margin-top: 20px;
    text-align: center;
    width: 100%;
  }

  .footer-f a {
    margin: 0 5px;
  }

  .footer-f {
    font-size: 18px;
  }
}

@media (max-width: 1000px) {
  .footer-g {
    margin-top: 10px;
  }
}

@media (max-width: 750px) {
  footer {
    border-width: 3px;
  }

  .footer {
    padding: 0.6rem 0;
  }

  .footer-a {
    height: 100px;
    width: auto;
  }

  .footer-bli {
    width: 0.6rem;
  }

  .footer-nav {
    display: block;
    margin-top: 0.6rem;
    padding: 0.3rem 0;
  }

  .footer-c,
  .footer-navli {
    width: 100%;
  }

  .footer-c {
    background: url(https://img.alicdn.com/imgextra/i4/O1CN01NRS0oe1lSEi3MeM7p_!!6000000004817-2-tps-14-8.png)
      no-repeat 100%;
    border-bottom: 1px solid #eee;
    font-size: 0.28rem;
    line-height: 0.9rem;
  }

  .footer-d,
  .footer-e {
    display: none;
  }

  .footer-e {
    padding: 0.15rem 0;
    width: 100%;
  }

  .footer-e a {
    display: block;
    font-size: 0.26rem;
    line-height: 0.6rem;
    padding: 0 0.3rem;
    width: 100%;
  }

  .footer-fg {
    margin-top: 0.4rem;
  }

  .footer-f,
  .footer-fg {
    font-size: 0.28rem;
  }

  .footer-g {
    border: 1px solid #eee;
    font-size: 0.26rem;
    line-height: 0.6rem;
    width: 1.2rem;
  }

  .footer-gif {
    width: 1.5rem;
  }
}
</style>
