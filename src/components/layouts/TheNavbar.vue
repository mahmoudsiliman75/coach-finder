<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/coaches"> <span> Coach </span> Finder</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="align-items-center justify-content-end" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav>
          <router-link to="/coaches"> Coaches </router-link>
          <router-link to="/requests"> Requests </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  .navbar-brand {
    span {
      font-size: 25px;
      font-weight: 700;
      color: #ff7b54;
    }
  }

  .navbar-toggler {
    border: none;
  }

  .navbar-nav {
    a {
      text-decoration: none;
      color: #fff;
      margin: 0 8px;
      padding-bottom: 3px;
      font-size: 18px;
      border-bottom: 2px solid transparent;
      transition: all 0.5s ease-in-out;
      &.router-link-exact-active {
        font-weight: 600;
      }
      &.router-link-exact-active,
      &:hover {
        color: #ff7b54;
        border-bottom: 2px solid #ff7b54;
      }
    }
  }
}
</style>