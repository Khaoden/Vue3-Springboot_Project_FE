<template>
  <div class="navbar" ref="navbar">
    <img class="logo" src="../../assets/logo-icon.png" alt="Logo" />
    <img class="logo-text" src="../../assets/logo-text.png" alt="Logo" />
    <nav class="nav-menu">
      <router-link
        v-for="item in menuItems"
        :key="item.name"
        :to="{ name: item.name }"
        class="nav-item"
        :class="{ active: isActiveRoute(item) }"
        @mouseover="showDropdown(item.name)"
        @mouseleave="handleMenuItemMouseLeave"
      >
        <span v-if="item.name === 'personal-center'">
          <img src="" alt="User" />
        </span>
        <span v-else>{{ item.label }}</span>
      </router-link>
    </nav>
    <transition
      name="dropdown"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="activeDropdown"
        class="dropdown-container"
        ref="dropdownContainer"
        @mouseover="clearHideDropdownTimer"
        @mouseleave="handleDropdownMouseLeave"
      >
        <div class="dropdown">
          <div class="dropdown-content">
            <h3>{{ activeDropdown.label }}</h3>
            <ul>
              <li
                v-for="subItem in activeDropdown.subItems"
                :key="subItem.name"
                @click="handleSubItemClick(subItem)"
              >
                <router-link :to="{ name: subItem.name }">
                  {{ subItem.label }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const activeDropdown = ref(null);
const dropdownContainer = ref(null);
let hideDropdownTimer = null;

const beforeEnter = (el) => {
  el.style.height = "0";
};

const enter = (el) => {
  nextTick(() => {
    el.style.height = el.scrollHeight + "px";
  });
};

const getRouteForItem = (item) => {
  return { name: item.name };
};

const isActiveRoute = (item) => {
  if (item.subItems && item.subItems.length > 0) {
    return item.subItems.some((subItem) => subItem.name === route.name);
  }
  return item.name === route.name;
};

const handleSubItemClick = (subItem) => {
  console.log(`Navigating to ${subItem.name}`);
  router.push({ name: subItem.name });
  activeDropdown.value = null;
};

const leave = (el) => {
  el.style.height = "0";
};

const menuItems = [
  {
    label: "公益项目",
    name: "charitable-projects",
    subItems: [
      { label: "平台公益", name: "platform-charity" },
      { label: "绿水青山", name: "environmental-protection" },
      { label: "乡村振兴", name: "rural-revitalization" },
      { label: "应急救灾", name: "disaster-relief" },
      { label: "助残扶弱", name: "disability-support" },
      { label: "健康公益", name: "health-charity" },
      { label: "国际公益", name: "international-charity" },
    ],
  },
  {
    label: "社区",
    name: "community",
    subItems: [],
  },
  {
    label: "资讯",
    name: "information",
    subItems: [
      { label: "活动新闻", name: "activity-news" },
      { label: "研究报告", name: "research-reports" },
    ],
  },
  {
    label: "关于我们",
    name: "about-us",
    subItems: [
      { label: "基金会简介", name: "foundation-introduction" },
      { label: "理事会简介", name: "board-intro" }, // 确保这里的名称与路由一致
      { label: "荣誉表彰", name: "honors" }, // 确保这里的名称与路由一致
      { label: "联系我们", name: "contact-us" },
    ],
  },
  {
    label: "个人中心",
    name: "personal-center",
    subItems: [
      { label: "个人中心", name: "personal-center" },
      { label: "账户设置", name: "account-settings"}
    ],
  },
];

const activeItem = computed(() => route.name);

const showDropdown = (name) => {
  if (name === "personal-center") {
    activeDropdown.value = null;

    return;
  }
  activeDropdown.value = menuItems.find((item) => item.name === name);
};

const handleMenuItemMouseLeave = (event) => {
  // 延迟隐藏下拉框，以防光标还在下拉框区域内
  hideDropdownTimer = setTimeout(() => {
    if (dropdownContainer.value) {
      const rect = dropdownContainer.value.getBoundingClientRect();
      const { clientY } = event;
      // 判断光标是否移到下拉框区域之外
      if (clientY > rect.bottom) {
        activeDropdown.value = null;
      }
    }
  }, 200); // 延迟200ms
};

const handleDropdownMouseLeave = () => {
  // 当光标离开下拉框时立即隐藏
  startHideDropdownTimer();
};

const startHideDropdownTimer = () => {
  hideDropdownTimer = setTimeout(() => {
    activeDropdown.value = null;
  }, 200); // 延迟200ms
};

const clearHideDropdownTimer = () => {
  clearTimeout(hideDropdownTimer);
};

onMounted(() => {
  document.addEventListener("click", (event) => {
    if (activeDropdown.value) {
      const navbar = document.querySelector(".navbar");
      const dropdown = dropdownContainer.value;
      if (!navbar.contains(event.target) && !dropdown.contains(event.target)) {
        activeDropdown.value = null;
      }
    }
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("click", () => {});
});
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  min-height: 50px;
  padding: 0 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  z-index: 1000;
  box-sizing: border-box;
  box-shadow: 0 2px 2px #ddd;
}

.logo {
  height: 80%;
  width: auto;
  max-height: 150px;
  object-fit: contain;
  margin-left: 2%;
}

.logo-text {
  height: 40%;
  width: auto;
  max-height: 150px;
  object-fit: contain;
  margin-right: 24%;
}

.nav-menu {
  display: flex;
  justify-content: flex-end;
  width: 70%;
}

.nav-item {
  font-size: 1.3vw;
  padding: 0 1vw;
  height: 100%;
  line-height: 10vh;
  white-space: nowrap;
  margin-right: 3.5vw;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;

  &:last-child {
    margin-right: 0;
  }

  &.active {
    color: #409eff;
  }

  &:hover {
    color: #409eff;
  }
}

.dropdown-container {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #f9f9f9;
  z-index: 999;
  overflow: hidden;
  transition: height 0.3s ease;
}

.dropdown {
  margin: 0 auto;
  width: 100%;
  background-color: #f9f9f9;
  border: none; /* 去除边框 */
  padding: 2%;
  box-sizing: border-box;
}

.dropdown-content {
  display: flex;
  align-items: flex-start;

  h3 {
    width: 20%;
    margin: 0;
    padding-right: 20px;
    border-right: none; /* 去除右边框 */
    font-size: 1.2em;
  }

  ul {
    width: 80%;
    list-style-type: none;
    padding-left: 1%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: right;

    li {
      width: 10%;
      padding: 5px 0;
      a {
        text-decoration: none;
        color: #333;
        transition: color 0.3s;

        &:hover {
          color: #409eff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .nav-item {
      font-size: 3vw;
      padding: 0 1vw;
      margin-right: 2vw;
    }

    .dropdown-content {
      flex-direction: column;

      h3 {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #ddd; /* 保留底部边框 */
        padding-bottom: 10px;
        margin-bottom: 10px;
      }

      ul {
        width: 100%;
        padding-left: 0;

        li {
          width: 50%;
        }
      }
    }
  }
}
</style>
