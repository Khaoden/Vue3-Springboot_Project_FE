<template>
  <div class="container">
    <div class="placeholder--w2tkuoAk"></div>
    <div style="background: rgb(245, 245, 245); font-size: 18px">
      <div class="contact gypad max1300">
        <div class="contact-ab">
          <div class="contact-a gytit40 wow fadeInUp animated">联系我们</div>
          <div class="news-b wow fadeInUp animated">
            我们非常重视用户反馈和问题，并会尽力提供帮助和解决方案。
          </div>
        </div>
        <div class="contact-ul wow fadeInUp animated">
          <div class="contact-li wow fadeInUp animated">
            <div class="contact-c">
              <img
                src="https://img.alicdn.com/imgextra/i3/O1CN01RIWXAP1i4TJWs6nCb_!!6000000004359-2-tps-63-62.png"
              />
            </div>
            <div class="contact-d">
              <div class="contact-d1">联系电话</div>
              <div class="contact-d2">  12345678912</div>
            </div>
          </div>
          <div class="contact-li wow fadeInUp animated">
            <div class="contact-c">
              <img
                src="https://img.alicdn.com/imgextra/i2/O1CN014xtTwZ1X1InW8LkSe_!!6000000002863-2-tps-74-61.png"
              />
            </div>
            <div class="contact-d">
              <div class="contact-d1">联系邮箱</div>
              <div class="contact-d2">123456789qq.com</div>
            </div>
          </div>
        </div>
        <div class="contact-ef wow fadeInUp animated">
          <div
            class="contact-e imgBj pos"
            style="
              background-image: url(https://img.alicdn.com/imgextra/i3/O1CN011M2Y9Y1Di5TyKQTss_!!6000000000249-0-tps-1300-290.jpg);
            "
          ></div>
          <div class="contact-f">
            <div class="contact-f1">
              江苏省镇江市丹阳市南京师范大学中北学院
            </div>
            <a href="https://gaode.com/" target="_blank" class="contact-f2">立即前往</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.contact-ab{
  margin-top: 80px;
  text-align: left;
}

.contact-a {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.3;
}

.news-b {
  color: #999;
  font-size: 16px;
  line-height: 1.8;
  margin-top: 20px;
  text-align: left;
}


.contact-ul {
  font-size: 0;
  margin-top: 80px;
  display: flex;
  
}

.contact-li {
  /* 设置背景颜色为白色 */
  background: #fff;
  /* 设置边框圆角为20px */
  border-radius: 20px;
  /* 设置为行内块元素 */
  display: inline-block;
  /* 隐藏溢出内容 */
  overflow: hidden;
  /* 设置内边距为30px 50px */
  padding: 30px 50px;
  /* 设置垂直对齐方式为顶部 */
  vertical-align: top;
  /* 设置宽度为49% */
  width: 49%;
}

.contact-c {
  float: left;
  width: 80px;
}

.contact-d {
  float: right;
  font-weight: 700;
  line-height: 1.3;
  text-align: right;
  width: calc(100% - 100px);
}

.contact-d1 {
  font-size: 18px;
}

.contact-d2 {
  font-family: arial;
  font-size: 28px;
}

.contact-li:nth-child(2n + 0) {
  margin-left: 2%;
}

.contact-ef {
  border-radius: 20px;
  height: 290px;
  margin-top: 40px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.contact-e {
  background-position: 100%;
}

.contact-f {
  position: absolute;
  right: 4%;
  top: 80px;
  width: 240px;
}

.contact-f1 {
  color: #fff;
  font-size: 18px;
  line-height: 1.8;
}

.contact-f2 {
  background: #fff;
  border-radius: 20px;
  color: #222;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  margin-top: 15px;
  text-align: center;
  width: 120px;
}

.contact-f2:hover {
  color: #222;
  opacity: 0.8;
}

@media (max-width: 1600px) {
  .contact-li {
    padding: 30px;
  }

  .contact-d2 {
    font-size: 22px;
  }

  .contact-d1 {
    font-size: 16px;
  }

  .contact-c {
    width: 70px;
  }
}

@media (max-width: 1200px) {
  .contact-li {
    padding: 20px;
  }

  .contact-d2 {
    font-size: 20px;
  }

  .contact-d1 {
    font-size: 16px;
  }
}

@media (max-width: 1000px) {
  .contact-li {
    margin: 0 0 15px;
    width: 100%;
  }

  .contact-li:nth-child(2n + 0) {
    margin-left: 0;
  }
}

@media (max-width: 750px) {
  .contact-li {
    padding: 0.4rem;
  }

  .contact-c {
    width: 100%;
  }

  .contact-c img {
    width: 0.8rem;
  }

  .contact-d {
    margin-top: 0.3rem;
    text-align: left;
    width: 100%;
  }

  .contact-d2 {
    font-size: 0.34rem;
    margin-top: 0.1rem;
  }

  .contact-d1 {
    font-size: 0.26rem;
  }

  .contact-ef {
    height: 3.2rem;
    margin-top: 0.5rem;
  }

  .contact-f {
    right: 10%;
    top: 22%;
    width: 45%;
  }

  .contact-f1 {
    font-size: 0.26rem;
  }

  .contact-f2 {
    font-size: 0.22rem;
    line-height: 0.5rem;
    margin-top: 0.1rem;
    width: 1.6rem;
  }
}

.gypad {
    min-height: 60vh;
    padding-bottom: 90px;
    padding-top: 150px
}
.gytit40 {
    font-size: 40px
}

.max1300 {
    max-width: 1300px
}

.max1280,.max1300 {
    margin: 0 auto;
    width: 92%
}

.imgBj {
    background: no-repeat 50%;
    background-size: cover
}

.divpos,.imgBj.pos {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%
}
.news-b {
    color: #666;
    font-size: 20px;
    margin-top: 5px
}
</style>
