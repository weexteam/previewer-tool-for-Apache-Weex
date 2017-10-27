<template>
  <div>
    <wxc-button text="Open Popup"
                @wxcButtonClicked="buttonClicked"></wxc-button>
    <wxc-popup width="500"
               pos="left"
               :show="isShow"
               @wxcPopupOverlayClicked="overlayClicked"></wxc-popup>
  </div>
</template>

<script>
  import { WxcButton, WxcPopup } from 'weex-ui';
  const meta = weex.requireModule('meta')
  // 配置 viewport 的宽度为 640px
  meta.setViewport({  
    width: 200
  })
  // or
  module.exports = {
    components: { WxcButton, WxcPopup },
    data: () => ({
      isShow: false
    }),
    methods: {
      buttonClicked () {
        this.isShow = true;
      },
      overlayClicked () {
        this.isShow = false;
      }
    }
  };
</script>