<template>
  <section>
      <div ref="products" class="product-container">
        <article ref="articles" v-for="plan in plans.shared.products" v-bind:key="plan.id">
        <img
            v-if="plan.name === 'Plano P'"
            src="../assets/icon-plan-p.svg"
            alt=""
        />
        <img
            v-if="plan.name === 'Plano M'"
            src="../assets/icon-plan-m.svg"
            alt=""
        />
        <img
            v-if="plan.name === 'Plano Turbo'"
            src="../assets/icon-plan-turbo.svg"
            alt=""
        />
        <h2>{{ plan.name }}</h2>
        <hr />
        <p>
            <small
            ><strike>R${{ plan.cycle[cycle].priceOrder }}</strike>
            <strong> R${{ applyDiscount(plan.cycle[cycle].priceOrder) }}</strong>
            <br />
            equivalente a</small
            >
        </p>
        <span class="product-price"
            ><small>R$</small>
            <strong>{{ getMonthlyPrice(plan.cycle[cycle].priceOrder) }}</strong
            ><small>/mês*</small></span
        >
        <br />
        <button @click="handleClick(plan.id)">Contrate Agora</button>
        <p><strong>1 ano de Domínio Grátis</strong><i class="icon-info"></i></p>
        <span>economize R$ {{ getSavings(plan.cycle[cycle].priceOrder) }} </span>
        <span class="discount">40% OFF</span>
        <hr />
        <ul>
            <template v-if="plan.name === 'Plano P'">
            <li>Para 1 site</li>
            <li><strong>100 GB</strong> de Armazenamento</li>
            </template>
            <template v-if="plan.name === 'Plano M'">
            <li>Sites Ilimitados</li>
            <li><strong>100 GB</strong> de Armazenamento</li>
            </template>
            <template v-if="plan.name === 'Plano Turbo'">
            <li>Sites Ilimitados</li>
            <li><strong>150 GB</strong> de Armazenamento</li>
            </template>
            <li>Contas de E-mail <strong>Ilimitadas</strong></li>
            <li>
            Criador de Sites <strong><u>Grátis</u></strong>
            </li>
            <li>Certificado SSL <strong>Grátis</strong> (https)</li>
        </ul>
        </article>
    </div>
    <a class="footnote-link" href="#">
        <sup>*</sup>Confira as condições da promoção
    </a>
    <img class="btn-left" src="../assets/btn-left.svg" alt="" @click="handleClickLeft" />
    <img class="btn-right" src="../assets/btn-right.svg" alt="" @click="handleClickRight" />
  </section>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
        slide: 0,
      plans: [],
      cycle: "triennially"
    };
  },
  methods: {
      handleClick(id) {
          location.href = `http://www.hostgator.com.br/?a=add&pid=${id}&billingcycle=${this.cycle}&promocode=PROMOHG40`;
      },
      handleClickLeft() {
          this.slide = this.slide > 0 ? this.slide - 1 : this.slide; 
          const widthCheck = window.innerWidth * 0.875;
          this.$refs.products.style.left = widthCheck > 316 ? `${this.slide * -20.6875}rem` : `${this.slide * -87.5}vw`;
      },
      handleClickRight() {
          this.slide = this.slide < 2 ? this.slide + 1 : this.slide; 
          const widthCheck = window.innerWidth * 0.875;
          this.$refs.products.style.left = widthCheck > 316 ? `${this.slide * -20.6875}rem` : `${this.slide * -87.5}vw`;
      },
    applyDiscount(price) {
      return (price * 0.6).toFixed(2);
    },
    getMonthlyPrice(price) {
      if (this.cycle === "triennially") {
        return (this.applyDiscount(price) / (12 * 3)).toFixed(2);
      } else if (this.cycle === "annually") {
        return (this.applyDiscount(price) / 12).toFixed(2);
      } else {
        return this.applyDiscount(price);
      }
    },
    getSavings(price) {
      return (price - this.applyDiscount(price)).toFixed(2);
    }
  },
  created() {
    fetch(`https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io/prices`)
      .then(response => response.json())
      .then(data => (this.plans = data))
      .catch(error => console.error(error));

    this.$root.$on("cycleChange", data => this.cycle = data);
  }
};
</script>

<style lang="scss" scoped>
section {
    position: relative;
    width: 100%;
    max-width: fit-content;
    text-align: center;
    margin: 0 auto;
    overflow-x: visible;
    transition: all 0.3s ease;

    @media screen and (min-width: 1200px) {
      text-align: right;
    }

    .footnote-link {
        display: inline-block;
      font-size: 0.75rem;
      color: #4480c5;
      margin-top: 1rem;
      margin-bottom: 1.875rem;
      @media screen and (min-width: 1200px) {
        margin-right: 1.625rem;
        }
    }
  }

.product-container {
    position: relative;
    width: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.6875rem;
    margin: 0 auto;
    margin-top: 2.875rem;
    padding: 0 1.625rem;
}

.btn-left,
.btn-right {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2.6875rem;
    height: auto;
    padding: 0.5rem;

    @media screen and (min-width: 1200px) {
        display: none;
    }
}

.btn-left {
    left: 0;
}

.btn-right {
    left: calc(100vw - 2.6875rem);
}

article {
  display: inline-block;
  position: relative;
  text-align: center;
  background-color: #ffffff;
  width: 84vw;
  border: 0.0625rem solid #dfecff;
  border-radius: 0.25rem;
  margin: 0 auto;
  padding: 2.125rem 1rem;

  &:hover {
    &:before,
    &:after {
      content: "";
      width: 100%;
      background-color: #ff6a17;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &:before {
      height: 1rem;
      top: -1rem;
    }

    &:after {
      height: 0.2rem;
      bottom: -0.2rem;
    }

    button {
      background: #ff6a17;
    }
  }
}

h2 {
  margin-top: 0.6rem;
  font-size: 1.62rem;
  color: #1d5297;
  font-weight: 700;
}

.product-price {
  font-size: 2.1875rem;
  color: #1d5297;
}

button {
  cursor: pointer;
  margin-top: 1.58rem;
  width: 229px;
  height: 44px;
  background: #4480c5;
  border-radius: 26px;
  font-size: 1.375rem;
  color: #ffffff;
  font-weight: 700;
}

p {
  margin-top: 1.981rem;
  font-size: 1.1875;
}

.icon-info {
  display: inline-block;
  position: relative;
  top: 0.2rem;
  margin-left: 0.2rem;
  width: 1rem;
  height: 1rem;
  background-image: url(../assets/icon-info.svg);
  background-size: contain;
}

span {
  font-size: 0.875rem;
  color: #1d5297;
}

.discount {
  display: inline-block;
  width: 5rem;
  height: auto;
  padding: 0.3125rem;
  border-radius: 14rem;
  background: #51c99c;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.875rem;
  text-align: center;
}

ul {
  list-style: none;
  font-size: 1rem;
  text-align: left;
  padding: 0;
  line-height: 3ch;
}

li {
  display: inline-block;
}

li:first-of-type,
li:nth-of-type(3) {
  border-bottom: 0.0625rem dashed #9eb8dc;
}

hr {
  border: 0.0625rem solid #dfecff;
  width: 84vw;
  position: relative;
  left: -1rem;
}

@media screen and (min-width: 768px) {
  article,
  hr {
    max-width: 20.6875rem;
  }

  li {
    display: block;
    width: fit-content;
  }
}
</style>
