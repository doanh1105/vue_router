<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Transaction</h1>
  <div class="" v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction-detail-router',
          params: { id: transaction.id },
        }"
        >{{ transaction.name }}</router-link
      >
      <div class="price">Price: {{ transaction.price }}</div>
    </div>
  </div>
  <div v-else>Loading</div>
</template>
<script>
import useTransaction from "../uses/fetchTransactions";

export default {
  setup() {
    const { transactions, fetchAll } = useTransaction();

    fetchAll();

    return { transactions };
  },
};
</script>
