<template>
  <div>
    <header>
      <img class="header-left" src="../assets/header-left.svg" alt="" />
      <div class="header-copy">
        <h2>Hospedagem de Sites</h2>
        <h3>
          Tenha uma hospedagem de sites estável e evite perder visitantes
          diariamente
        </h3>
        <ul>
          <li>99,9% de disponibilidade: seu site sempre no ar</li>
          <li>Suporte 24h, todos os dias</li>
          <li>Painel de Controle cPanel</li>
        </ul>
      </div>
      <img class="header-right" src="../assets/header-right.svg" alt="" />
    </header>
    <img class="btn-down" src="../assets/btn-down.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  color: #ffffff;
  text-align: center;
  padding: 2rem 0.9375rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    padding-top: 6rem;
  }

  .header-left,
  .header-right {
    display: none;

    @media screen and (min-width: 1200px) {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  h2,
  li {
    font-size: 1rem;
    color: #b9d0ef;
  }

  h2 {
    margin: 0;
    font-weight: 600;
  }

  h3 {
    margin-top: 0.75rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2ch;
  }

  ul {
    width: 80%;
    margin: 0 auto;
    padding: 0;
    padding-left: 1.25rem;
  }

  li {
    list-style-image: url(../assets/icon-check.svg);
    margin-bottom: 1.5ch;

    @media screen and (min-width: 768px) {
      display: inline-block;
      padding: 0 0.6875rem;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(#1d5297, #1d5297);

    @media screen and (min-width: 768px) {
      -webkit-clip-path: ellipse(158% 90% at 30% 10%);
      clip-path: ellipse(158% 90% at 30% 10%);
    }

    @media screen and (min-width: 1200px) {
      height: 80%;
      -webkit-clip-path: ellipse(158% 90% at 30% 10%);
      clip-path: ellipse(-350% 70% at 60% 0%);
    }
  }
}

.btn-down {
  position: relative;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 1200px) {
    top: -6rem;
  }
}
</style>
