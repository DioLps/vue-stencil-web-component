<template>
  <section class="app">
    <h2 class="app__title">This is my stencil component:</h2>

    <div class="app__list">
      <my-component
        class="app__item"
        v-for="item in cards"
        :key="item.title"
        :my-title="item?.title"
        :description="item?.description"
        :btn-submit-label="item?.btnSubmitLabel"
        @submitted="submitedOnWebComponent()"
      ></my-component>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      cards: [
        {
          title: "Test 1",
          description: "Test 1",
          btnSubmitLabel: "Learn More",
        },
        {
          title: "Test 2",
          description: "Test 2",
          btnSubmitLabel: "Learn More",
        },
        {
          title: "Test 3",
          description: "Test 3",
          btnSubmitLabel: "Learn More",
        },
        {
          title: "Test 4",
          description: "Test 4",
          btnSubmitLabel: "Learn More",
        },
      ],
    };
  },
  methods: {
    submitedOnWebComponent() {
      alert("I was submited in a stencil web component");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
  padding: 1rem;
}

.app__title {
  margin-top: 0;
}

.app__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
}

.app__item {
  flex: 0 0 32%;
}
</style>
