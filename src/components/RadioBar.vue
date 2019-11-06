<template>
  <form action="">
    <fieldset>
      <label for="cycle">Quero pagar a cada:</label><br />
      <div>
        <input
          type="radio"
          name="cycle"
          v-model="cycle"
          value="triennially"
          checked
        />
        3 anos
        <input type="radio" name="cycle" v-model="cycle" value="annually" /> 1
        ano
        <input type="radio" name="cycle" v-model="cycle" value="monthly" /> 1
        mês
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "RadioBar",
  data() {
    return {
      cycle: "triennially"
    };
  },
  updated() {
    this.$root.$emit("cycleChange", this.cycle);
  }
};
</script>

<style lang="scss" scoped>
form {
  margin-top: -1rem;
  text-align: center;

  @media screen and (min-width: 1200px) {
    margin-top: -5rem;
  }
}

fieldset {
  border: none;
}

label {
  font-size: 0.875rem;
  color: #1d5297;
}

div {
  margin-top: 0.4556rem;
  display: inline-block;
  width: 18.125rem;
  padding: 0.6875rem;
  background: #ffffff;
  box-shadow: 0rem 0.125rem 0.25rem #4480c570;
  border: 0.0625rem solid #4480c5;
  border-radius: 1.3125rem;

  @media screen and (min-width: 720px) {
    width: 20.6875rem;
  }
}

input {
  position: relative;
  margin-left: 1rem;
  margin-right: 0.4rem;

  &:before,
  &:after {
    content: "";
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &:before {
    width: 1.125rem;
    height: 1.125rem;
    background-color: #ffffff;
    border: 0.1rem solid #9eb8dc;
  }
}

input:first-of-type {
  margin-left: 0;
}

input:checked {
  &:before {
    width: 1.125rem;
    height: 1.125rem;
    background: #ffffff;
    border: #4480c5 solid 0.1rem;
  }

  &:after {
    width: 0.6rem;
    height: 0.6rem;
    background: #4480c5;
    border: #4480c5 solid 0.1rem;
  }
}
</style>
