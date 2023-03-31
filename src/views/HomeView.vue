<template>
  <h1>HomeView</h1>
  <!-- <p>{{ a }}</p>
  <input type="text" v-model="searchText" />
  <button @click="onChange">Change</button>
  <ul>
    <li v-for="(customer, index) in customersFilled" :key="index">
      {{ customer }}
    </li>
  </ul> -->
</template>

<script>
// import { ref, computed, reactive, watch } from "vue";

// export default {
//   props: {
//     theme: {
//       type: String,
//       required: false,
//       default: "light",
//     },
//   },
//   setup(props, context) {
//     console.log(props);
//     console.log(context);

//     const searchText = ref("");
//     // const a = ref("HEHHE API");
//     const customers = reactive(["Something", "Ngọc Anh", "Xinh", "hihi"]);

//     const customersFilled = computed(() =>
//       customers
//         .map((customer) => {
//           customer = customer.toLowerCase();
//           return customer;
//         })
//         .filter((customer) => customer.includes(searchText.value.toLowerCase()))
//     );

//     watch(searchText, (pa, pb) => {
//       console.log(pa, pb);
//     });
//     return { searchText, customersFilled };
//   },
// };

export default {
  data() {
    return {
      count: 0,
    };
  },

  created() {
    console.log(this.$store.state.count);
  },
};
</script>
