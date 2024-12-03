<template>
  <div class="map-layout">
    <div class="layout-header">
      <div class="header-left">
        <div class="logo"></div>
        <div class="company-name">SLNA CLUB</div>
      </div>
      <div class="header-right">
        <span class="name">Hà Văn Huy</span>
        <i class="el-icon-user-solid"></i>
      </div>
    </div>
    <div class="layout-navbar">
      <div 
        class="tooltip" 
        v-for="(item, index) in menuItems" 
        :key="index" 
        :class="{ active: activeIndex === index }" 
        @click="setActive(index)"
      >
        <router-link :to="item.path">
          <i :class="item.icon"></i>
          <span class="tooltip-text">{{ item.text }}</span>
        </router-link>
      </div>
    </div>
    <div class="layout-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
      activeIndex: null,
      menuItems: [
        { path: '/dashboard', icon: 'el-icon-s-home', text: 'Dashboard' },
        { path: '/tickets', icon: 'el-icon-tickets', text: 'Tickets' },
        { path: '/users', icon: 'el-icon-user', text: 'Users' },
        { path: '/ticket-logs', icon: 'el-icon-document-copy', text: 'Ticket Logs' },
        { path: '/categories', icon: 'el-icon-receiving', text: 'Categories' },
        { path: '/labels', icon: 'el-icon-takeaway-box', text: 'Labels' }
      ]
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    }
  }
}
</script>


<style scoped>
.map-layout {
  background-color: bisque;
  height: 100vh;
  width: 100wv;
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-columns: 200px 4fr;
  grid-template-areas:
    "header header"
    "navbar content";

  .layout-header {
    grid-area: header;
    background-color: #fff;
    color: #111;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 0 16px;

    .header-left {
      display: flex;
      align-items: center;
      gap: 24px;

      .logo {
        background-image: url(../../assets/logo_company.png);
        height: 44px;
        width: 44px;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .company-name {
        color: #111;
        font-weight: 700;
      }
    }

    .header-right {
      display: flex;
      align-items: center;

      .name {
        margin-right: 24px;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  .layout-navbar {
    grid-area: navbar;
    background-color: #f8f9fa;
    text-align: left;

    .tooltip {
      display: inline-block;
      cursor: pointer;
      color: #111;
      border-radius: 5px;
      font-size: 14px;
      width: 100%;
      background-color: #fff;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #e2e2e2;
      padding-left: 16px;

      a {
        text-decoration: none;
        color: inherit;
      } 
    }

    .tooltip.active {
        color: rgb(13, 155, 20);
        font-weight: bold;

        .tooltip-text {
          color: rgb(13, 155, 20);
        }
      }

    .tooltip-text {
      background-color: #fff;
      color: #111;
      text-align: center;
      border-radius: 5px;
      padding: 5px;
    }

    .tooltip:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
    }
  }

  .layout-content {
    grid-area: content;
    background-color: #e9ecef;
    padding: 1em;
  }
}
</style>
