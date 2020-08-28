<template>
  <div>
    <div class="columns is-centered mt-6">
      <div class="column is-4 px-0 py-0 panel is-primary">
        <p class="panel-heading">
          Login
        </p>
        <div class="field px-4 mt-3">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-success"
              type="text"
              placeholder="Text input"
              value="bulma"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>

        <div class="field px-4">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-danger"
              type="email"
              placeholder="Email input"
              value="hello@"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p class="help is-danger">This email is invalid</p>
        </div>

        <div class="field is-grouped px-4 pb-4">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style lang="scss" scoped></style>
