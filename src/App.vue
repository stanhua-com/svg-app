<template>
  <div class="page" id="app">
    <header-layout></header-layout>
    <router-view />
    <footer-layout></footer-layout>


    <context-menu :target="contextMenuTarget" :show="contextMenuVisible"
      @update:show="(show) => contextMenuVisible = show">
      <div class="context-menu_item" @click="onBack">返回(B)</div>
      <div class="context-menu_item" @click="onReload">重新刷新(R)</div>
    </context-menu>
  </div>
</template>

<script src="./App.js"></script>