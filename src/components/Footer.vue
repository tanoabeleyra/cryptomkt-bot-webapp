<template>
  <div id="footer-content" class="has-text-centered">
    <span>{{ currentMarket.code }}</span>
    <div class="price has-text-centered">
      <div class="price-label has-text-weight-light">{{ $t('bidPrice') }}</div>
      <div>{{ formatPrice(bid) }}</div>
    </div>
    <div class="price has-text-centered">
      <div class="price-label has-text-weight-light">{{ $t('askPrice') }}</div>
      <div>{{ formatPrice(ask) }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  computed: mapGetters(['ask', 'bid']),
})
class Footer extends Vue {
  formatPrice(price) {
    return this.formatAmount(
      price,
      this.currentMarket.quoteCurrency,
      this.currentMarket.decimals
    );
  }
}

export default Footer;
</script>

<style scoped lang="scss">
#footer-content {
  $height: 64px;
  background-color: #677ae4;
  color: #fff;
  font-size: 1.2rem;
  padding: 16px 0;
  height: $height;
  line-height: $height / 2;
  position: relative;
}
.price {
  display: inline-block;
  margin-top: -7px;
  margin-left: 10px;
}
.price-label {
  font-size: 0.7rem;
  line-height: 0.2rem;
}
</style>
