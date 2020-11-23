<template>
  <div class="header">
    <div class="header-nav">
      <div class="nav-item" v-for="(item, i) in menuList" :key="i" :class="{'nav-active':activePath===item.link}"
        @click="onNavItem(i)">{{ item.name }}</div>
    </div>
  </div>
</template>

<style lang="scss" src="./header.scss"></style>
<script src="./header.js"></script>