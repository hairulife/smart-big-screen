<template>
  <div class="module">
    <div class="environment">
      <Card v-for="(item, index) in cards" :key="index" :item="item">
        <template #slot1="{ item }">
          <div class="item">
            <div class="icon" v-html="item.svg"></div>
            <div class="value">
              <div class="value">{{ item.value }}</div>
              <div class="unit">{{ item.unit }}</div>
            </div>
          </div>
        </template>
        <template #slot2="{ item }">
          <div class="item">
            <div class="icon" v-html="item.svg"></div>
            <div class="value">
              <div class="value">{{ item.value }}</div>
              <div class="unit">{{ item.unit }}</div>
            </div>
          </div>
        </template>
        <template #slot3="{ item }">
          <div class="item">
            <div class="icon" v-html="item.svg"></div>
            <div class="value">
              <div class="value">{{ item.value }}</div>
              <div class="unit">{{ item.unit }}</div>
            </div>
          </div>
        </template>
        <template #slot4="{ item }">
          <div class="item item4">
            <div class="icon" v-html="item.svg"></div>
            <div class="value">
              <div class="value">{{ item.value }}</div>
              <div class="unit">{{ item.unit }}</div>
            </div>
          </div>
        </template>
        <template #slot5="{ item }">
          <div class="item">
            <div class="icon" v-html="item.svg"></div>
            <div class="value">
              <div class="value">{{ item.value }}</div>
              <div class="unit">{{ item.unit }}</div>
            </div>
          </div>
        </template>
        <template #slot6="{ item }">
          <div class="item item-6">
            <div class="icon" v-html="item.svg"></div>
            <div class="value">
              <div class="value">{{ item.value }}</div>
              <div class="unit">{{ item.unit }}</div>
            </div>
          </div>
        </template>
        <template #slot7="{ item }">
          <div class="item">
            <div class="icon" v-html="item.svg"></div>
            <div class="value">
              <div class="value">{{ item.value }}</div>
              <div class="unit">{{ item.unit }}</div>
            </div>
          </div>
        </template>
        <template #slot8="{ item }">
          <div class="item item8">
            <div class="icon" v-html="item.svg"></div>
            <div class="value">
              <div class="value">{{ item.value }}</div>
              <div v-if="item.unit" class="unit">{{ item.unit }}</div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import Card from './Card.vue'
import { ref } from 'vue'
let cards = ref([
  {
    title: '温度统计',
    value: 26.8,
    unit: '摄氏度',
    slot: 'slot1',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><circle cx="256" cy="256" r="144" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="12"/><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M256 200v-48m108 104h-48m-116 0h-48m180-68l-24 24m-104 0l-24-24m128 112l24 24m-152 0l24-24"/><circle cx="256" cy="256" r="24" fill="#ef4444"/><path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M256 284V164"><animateTransform attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" keyTimes="0; .17; .25; .42; .5; .67; 1" repeatCount="indefinite" type="rotate" values="-54 256 256; -15 256 256; -36 256 256; 36 256 256; 10 256 256; 115 256 256; -54 256 256"/></path></svg>'
  },
  {
    title: '风速统计',
    value: '二级',
    slot: 'slot2',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><defs><symbol id="meteoconsWind0" viewBox="0 0 342 234"><path fill="none" stroke="#fff" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2960"/></path><path fill="none" stroke="#fff" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1540"/></path></symbol></defs><use width="342" height="234" href="#meteoconsWind0" transform="translate(85 139)"/></svg>'
  },
  {
    title: '温度统计',
    value: 26.8,
    unit: '摄氏度',
    slot: 'slot3',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><circle cx="256" cy="256" r="144" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="12"/><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M256 200v-48m108 104h-48m-116 0h-48m180-68l-24 24m-104 0l-24-24m128 112l24 24m-152 0l24-24"/><circle cx="256" cy="256" r="24" fill="#ef4444"/><path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M256 284V164"><animateTransform attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" keyTimes="0; .17; .25; .42; .5; .67; 1" repeatCount="indefinite" type="rotate" values="-54 256 256; -15 256 256; -36 256 256; 36 256 256; 10 256 256; 115 256 256; -54 256 256"/></path></svg>'
  },
  {
    title: '噪音统计',
    value: 52,
    unit: '分贝',
    slot: 'slot4',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m-8 7a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill="#ef4444" d="M16.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-8 0a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0z"/></svg>'
  },
  {
    title: '扬尘统计',
    value: 1.2,
    unit: '毫克每立方米',
    slot: 'slot5',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><defs><linearGradient id="meteoconsDustFill0" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#fff"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="meteoconsDustFill1" x1="6" x2="18" y1="169.6" y2="190.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ef4444"/><stop offset=".5" stop-color="#ef4444"/><stop offset="1" stop-color="#ef4444"/></linearGradient><linearGradient id="meteoconsDustFill2" x1="66" x2="78" y1="169.6" y2="190.4" href="#meteoconsDustFill1"/><linearGradient id="meteoconsDustFill3" x1="38" x2="50" y1="137.6" y2="158.4" href="#meteoconsDustFill1"/><linearGradient id="meteoconsDustFill4" x1="98" x2="110" y1="137.6" y2="158.4" href="#meteoconsDustFill1"/><linearGradient id="meteoconsDustFill5" x1="70" x2="82" y1="101.6" y2="122.4" href="#meteoconsDustFill1"/><linearGradient id="meteoconsDustFill6" x1="130" x2="142" y1="101.6" y2="122.4" href="#meteoconsDustFill1"/><linearGradient id="meteoconsDustFill7" x1="102" x2="114" y1="69.6" y2="90.4" href="#meteoconsDustFill1"/><linearGradient id="meteoconsDustFill8" x1="162" x2="174" y1="69.6" y2="90.4" href="#meteoconsDustFill1"/><linearGradient id="meteoconsDustFill9" x1="134" x2="146" y1="33.6" y2="54.4" href="#meteoconsDustFill1"/><linearGradient id="meteoconsDustFilla" x1="194" x2="206" y1="33.6" y2="54.4" href="#meteoconsDustFill1"/><linearGradient id="meteoconsDustFillb" x1="166" x2="178" y1="1.6" y2="22.4" href="#meteoconsDustFill1"/><linearGradient id="meteoconsDustFillc" x1="226" x2="238" y1="1.6" y2="22.4" href="#meteoconsDustFill1"/><symbol id="meteoconsDustFilld" viewBox="0 0 350 222"><path fill="url(#meteoconsDustFill0)" stroke="#fff" stroke-miterlimit="10" stroke-width="6" d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"/></symbol><symbol id="meteoconsDustFille" viewBox="0 0 244 192"><circle cx="12" cy="180" r="12" fill="url(#meteoconsDustFill1)"><animate attributeName="opacity" begin="-1s" dur=".67s" repeatCount="indefinite" values="0.5; 1; .5"/></circle><circle cx="72" cy="180" r="12" fill="url(#meteoconsDustFill2)"><animate attributeName="opacity" begin="-1.08s" dur=".67s" repeatCount="indefinite" values="0.5; 1; .5"/></circle><circle cx="44" cy="148" r="12" fill="url(#meteoconsDustFill3)"><animate attributeName="opacity" begin="-1.16s" dur=".67s" repeatCount="indefinite" values="0.5; 1; .5"/></circle><circle cx="104" cy="148" r="12" fill="url(#meteoconsDustFill4)"><animate attributeName="opacity" begin="-1.24s" dur=".67s" repeatCount="indefinite" values="0.5; 1; .5"/></circle><circle cx="76" cy="112" r="12" fill="url(#meteoconsDustFill5)"><animate attributeName="opacity" begin="-1.32s" dur=".67s" repeatCount="indefinite" values="0.5; 1; .5"/></circle><circle cx="136" cy="112" r="12" fill="url(#meteoconsDustFill6)"><animate attributeName="opacity" begin="-1.40s" dur=".67s" repeatCount="indefinite" values="0.5; 1; .5"/></circle><circle cx="108" cy="80" r="12" fill="url(#meteoconsDustFill7)"><animate attributeName="opacity" begin="-1.48s" dur=".67s" repeatCount="indefinite" values="0.5; 1; .5"/></circle><circle cx="168" cy="80" r="12" fill="url(#meteoconsDustFill8)"><animate attributeName="opacity" begin="-1.56s" dur=".67s" repeatCount="indefinite" values="0.5; 1; .5"/></circle><circle cx="140" cy="44" r="12" fill="url(#meteoconsDustFill9)"><animate attributeName="opacity" begin="-1.64s" dur=".67s" repeatCount="indefinite" values="0.5; 1; .5"/></circle><circle cx="200" cy="44" r="12" fill="url(#meteoconsDustFilla)"><animate attributeName="opacity" begin="-1.72s" dur=".67s" repeatCount="indefinite" values="0.5; 1; .5"/></circle><circle cx="172" cy="12" r="12" fill="url(#meteoconsDustFillb)"><animate attributeName="opacity" begin="-1.80s" dur=".67s" repeatCount="indefinite" values="0.5; 1; .5"/></circle><circle cx="232" cy="12" r="12" fill="url(#meteoconsDustFillc)"><animate attributeName="opacity" begin="-1.88s" dur=".67s" repeatCount="indefinite" values="0.5; 1; .5"/></circle></symbol><clipPath id="meteoconsDustFillf"><path fill="none" d="M0 0h512L0 512V0z"/></clipPath></defs><g clip-path="url(#meteoconsDustFillf)"><use width="350" height="222" href="#meteoconsDustFilld" transform="translate(85 145)"/></g><use width="244" height="192" href="#meteoconsDustFille" transform="translate(192 182)"/></svg>'
  },
  {
    title: 'PM10浓度统计',
    value: 62,
    unit: '微克每立方米',
    slot: 'slot6',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.023 13.223a2.982 2.982 0 1 0 2.982 2.977a2.984 2.984 0 0 0-2.982-2.977m0 4.657A1.675 1.675 0 1 1 19.7 16.2a1.676 1.676 0 0 1-1.677 1.68M5.987 5.638A2.982 2.982 0 1 0 8.969 8.62a2.986 2.986 0 0 0-2.982-2.982m0 4.656A1.674 1.674 0 1 1 7.661 8.62a1.676 1.676 0 0 1-1.674 1.674m0 2.929A2.982 2.982 0 1 0 8.969 16.2a2.986 2.986 0 0 0-2.982-2.977m0 4.657a1.675 1.675 0 1 1 1.674-1.68a1.676 1.676 0 0 1-1.674 1.68m11.79-6.57A2.982 2.982 0 1 0 14.8 8.328a2.985 2.985 0 0 0 2.977 2.982m0-4.656A1.674 1.674 0 1 1 16.1 8.328a1.676 1.676 0 0 1 1.677-1.674m-5.771 9.196a2.981 2.981 0 1 0 2.981 2.98a2.984 2.984 0 0 0-2.981-2.98m0 4.656a1.675 1.675 0 1 1 1.674-1.676a1.677 1.677 0 0 1-1.674 1.676m-.124-12.355A2.982 2.982 0 1 0 8.9 5.169a2.985 2.985 0 0 0 2.982 2.982m0-4.656a1.674 1.674 0 1 1-1.675 1.674A1.677 1.677 0 0 1 11.882 3.5ZM12 14.988A2.988 2.988 0 1 0 9.007 12A2.99 2.99 0 0 0 12 14.988m0-4.668A1.681 1.681 0 1 1 10.315 12A1.68 1.68 0 0 1 12 10.32"/></svg>'
  },
  {
    title: '风向统计',
    value: '东北方向',
    slot: 'slot7',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="M148 376V136"/><path fill="#ef4444" d="m191.4 137l28.8 4.3a6.4 6.4 0 0 1 5.4 6.3v73.7a6.4 6.4 0 0 1-5.4 6.3l-28.8 4.2a6.4 6.4 0 0 1-7.3-6.4v-82a6.4 6.4 0 0 1 7.3-6.3Z"><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 99 184; 6 99 184; -6 99 184"/></path><path fill="#ef4444" d="m260.6 146.1l28.8 4.2a6.4 6.4 0 0 1 5.4 6.3v55.6a6.4 6.4 0 0 1-5.5 6.3l-28.7 4.2a6.4 6.4 0 0 1-7.3-6.3v-64a6.4 6.4 0 0 1 7.3-6.3Z"><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 99 184; 6 99 184; -6 99 184"/><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="1.5s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 5 0; 0 0"/></path><path fill="#ef4444" d="m329.8 155.2l28.7 4.2a6.4 6.4 0 0 1 5.5 6.3v37.4a6.4 6.4 0 0 1-5.5 6.3l-28.7 4.2a6.4 6.4 0 0 1-7.3-6.3v-45.8a6.4 6.4 0 0 1 7.3-6.3Z"><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 99 184; 6 99 184; -6 99 184"/><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="1.5s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 10 0; 0 0"/></path></svg>'
  },
  {
    title: 'PM2.5浓度统计',
    value: 33,
    unit: '微克每立方米',
    slot: 'slot8',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.023 13.223a2.982 2.982 0 1 0 2.982 2.977a2.984 2.984 0 0 0-2.982-2.977m0 4.657A1.675 1.675 0 1 1 19.7 16.2a1.676 1.676 0 0 1-1.677 1.68M5.987 5.638A2.982 2.982 0 1 0 8.969 8.62a2.986 2.986 0 0 0-2.982-2.982m0 4.656A1.674 1.674 0 1 1 7.661 8.62a1.676 1.676 0 0 1-1.674 1.674m0 2.929A2.982 2.982 0 1 0 8.969 16.2a2.986 2.986 0 0 0-2.982-2.977m0 4.657a1.675 1.675 0 1 1 1.674-1.68a1.676 1.676 0 0 1-1.674 1.68m11.79-6.57A2.982 2.982 0 1 0 14.8 8.328a2.985 2.985 0 0 0 2.977 2.982m0-4.656A1.674 1.674 0 1 1 16.1 8.328a1.676 1.676 0 0 1 1.677-1.674m-5.771 9.196a2.981 2.981 0 1 0 2.981 2.98a2.984 2.984 0 0 0-2.981-2.98m0 4.656a1.675 1.675 0 1 1 1.674-1.676a1.677 1.677 0 0 1-1.674 1.676m-.124-12.355A2.982 2.982 0 1 0 8.9 5.169a2.985 2.985 0 0 0 2.982 2.982m0-4.656a1.674 1.674 0 1 1-1.675 1.674A1.677 1.677 0 0 1 11.882 3.5ZM12 14.988A2.988 2.988 0 1 0 9.007 12A2.99 2.99 0 0 0 12 14.988m0-4.668A1.681 1.681 0 1 1 10.315 12A1.68 1.68 0 0 1 12 10.32"/></svg>'
  }
])
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 120px;
  .environment {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);

    gap: 100px;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon {
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        :deep(svg) {
          width: 100%;
          height: 100%;
        }
      }
      .value {
        font-size: 36px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 6px;
        .value {
          font-size: 30px;
          font-weight: bold;
        }
        .unit {
          font-size: 18px;
          font-weight: normal;
        }
      }

      &.item4,
      &.item-6,
      &.item8 {
        .icon {
          :deep(svg) {
            width: 80px;
            height: 80px;
          }
        }
      }
    }
  }
}
</style>
