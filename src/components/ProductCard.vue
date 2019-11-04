<template>
    <article>
        <img src="../assets/icon-plan.svg" alt="">
        <h2>Plano P</h2>
        <hr />
        <p><small><strike>R$431,64</strike> <strong>R$302,15</strong><br> equivalente a</small></p>
        <span class="product-price"><small>R$</small> <strong>8,39</strong><small>/mês*</small></span>
        <button>Contrate Agora</button>
        <p><strong>1 ano de Domínio Grátis</strong><i class="icon-info"></i></p>
        <span>economize R$ 174,48 </span>
        <span class="discount">40% OFF</span>
        <hr />
        <ul>
            <li>Para 1 site</li>
            <li><strong>100 GB</strong> de Armazenamento</li>
            <li>Contas de E-mail <strong>Ilimitadas</strong></li>
            <li>Criador de Sites <strong><u>Grátis</u></strong></li>
            <li>Certificado SSL <strong>Grátis</strong> (https)</li>
        </ul>
    </article>
</template>

<script>
export default {
    name: 'ProductCard',
}
</script>

<style lang="scss" scoped>
    article {
        text-align: center;
        background-color: #ffffff;
        width: 84vw;
        border: .0625rem solid #DFECFF;
        border-radius: .25rem;
        margin: 2.875rem auto;
        padding: 2.125rem 1rem;
    }

    h2 {
        margin-top: 0.6rem;
        font-size: 1.62rem;
        color: #1D5297;
        font-weight: 700;
    }

    .product-price {
        font-size: 2.1875rem;
        color: #1D5297;
    }

    button {
        margin-top: 1.58rem;
        width: 229px;
        height: 44px;
        background: #4480C5;
        border-radius: 26px;
        font-size: 1.375rem;
        color: #ffffff;
        font-weight: 700;
    }

    p {
        margin-top: 1.981rem;
        font-size: 1.1875;
        color: #333333;
    }

    .icon-info{
        display: inline-block;
        position: relative;
        top: .2rem;
        margin-left: 0.2rem;
        width: 1rem;
        height: 1rem;
        background-image: url(../assets/icon-info.svg);
        background-size: contain;
    }
    
    span {
        font-size: 0.875rem;
        color: #1D5297;
    }

    .discount {
        display: inline-block;
        width: 5rem;
        height: auto;
        padding: .3125rem;
        border-radius: 14rem;
        background: #51C99C;
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
        border-bottom: .0625rem dashed #9EB8DC;
    }

    hr {
        border: .0625rem solid #DFECFF;
        width: 84vw;
        position: relative;
        left: -1rem;
    }

</style>
