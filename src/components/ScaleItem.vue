<template>
    <div class="sacle-item">
        <div class="content">{{ item.content }}</div>
        <div class="radio-list">
            <div class="out-side">
                <input type="radio" :name=item.id value="1" />
                <div>完全认可</div>
            </div>
            <div class="out-side left">
                <input type="radio" :name=item.id value="2" />
                <div>比较认可</div>
            </div>
            <div class="out-side left">
                <input type="radio" :name=item.id value="3" />
                <div>不清楚</div>
            </div>
            <div class="out-side left">
                <input type="radio" :name=item.id value="4" />
                <div>比较反对</div>
            </div>
            <div class="out-side left">
                <input type="radio" :name=item.id value="5" />
                <div>完全反对</div>
            </div>
        </div>
    </div>
</template>
<script>
// import VueSlider from 'vue-slider-component'
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
    name: 'WeiboItem',
    components: {
        // VueSlider
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup() {
        // const emits = defineEmits(['data'])
        const data = toRefs(reactive({ value: 0 }))
        // const fun = () => {
        //     console.log(data.value)
        //     emits('data', data.value)
        // };
        return {
            data
        }

    }
});
</script>  
<style>
.sacle-item {
  width: 700px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 30px !important;
}

.out-side {
    display: flex;
    font-size: 16px;
}

.radio-list {
  display: flex;
  width: 700px;
  justify-content: space-between;
}

.left {
    /* margin-left: 5px; */
}
.content {
  word-break: break-all;
  margin-bottom: 20px;
  font-size: 18px;
}
</style>