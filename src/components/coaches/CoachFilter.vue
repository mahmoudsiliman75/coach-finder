<template>
  <div class="filters">
    <span class="filter_options">
      <input type="checkbox" id="frontend" checked @change="setFilter">
      <label for="frontend"> Front-End </label>
    </span>

    <span class="filter_options">
      <input type="checkbox" id="backend" checked @change="setFilter">
      <label for="backend"> Back-End </label>
    </span>

    <span class="filter_options">
      <input type="checkbox" id="career" checked @change="setFilter">
      <label for="career"> career </label>
    </span>
  </div>
</template>

<script>
export default {
  emits: ['change-filter'],

  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      }
    }
  },

  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      }
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  },
}
</script>

<style lang="scss" scoped>
  .filters {
    text-align: center;
    margin-top: 15px;
    .filter_options {
      margin-right: 1rem;
      label {
        margin-left: 0.4rem;
      }

      &.active label {
        font-weight: bold;
      }
    }
  }
</style>