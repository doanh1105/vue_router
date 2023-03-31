<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="nav">
    <router-link :to="{ name: 'overview-router' }">Overview</router-link>
    <router-link :to="{ name: 'transaction-router' }">Transaction</router-link>
    <router-link to="/">Budgests</router-link>
    <router-link to="/">Reports</router-link>
    <router-link to="/">Settings</router-link>
  </nav>
</template>
