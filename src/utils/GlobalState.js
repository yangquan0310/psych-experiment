import { provide, reactive } from 'vue';

// 创建一个响应式对象作为全局状态
const globalState = reactive({
    count: 0,
});

// 通过 provide 将全局状态提供给组件
export function provideGlobalState() {
    provide('globalState', globalState);
}
