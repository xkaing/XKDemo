<script setup>
import TplDemo from './components/BaseUse/TplDemo.vue'
import ComputedDemo from './components/baseuse/ComputedDemo.vue'
import WatchDemo from './components/baseuse/WatchDemo.vue'
import ClassDemop from './components/baseuse/ClassDemo.vue'
import CondittionDemo from './components/baseuse/ConditionDemo.vue'
import ListDemo from './components/baseuse/ListDemo.vue'
import EventDemo from './components/baseuse/EventDemo.vue'
import Form from './components/baseuse/FormDemo.vue'
import ComponentDemo from './components/ComponentsDemo/index.vue'
import AdvancedUse from './components/AdvancedUse/index.vue'
</script>

<template>
  <div id="app">
    <h1>基础使用</h1>
    <h2>01-模版（插值，指令）</h2>
    <TplDemo />
    <hr>
    <h2>02-computed和watch</h2>
    <ComputedDemo />
    <WatchDemo />
    <hr>
    <h2>03-class和style</h2>
    <ClassDemop />
    <hr>
    <h2>04-条件</h2>
    <CondittionDemo />
    <hr>
    <h2>05-循环</h2>
    <ListDemo />
    <hr>
    <h2>06-事件</h2>
    <EventDemo />
    <hr>
    <h2>07-表单</h2>
    <Form />
    <hr>
    <h2>08-组件使用</h2>
    <ComponentDemo />
    <AdvancedUse />
  </div>
</template>
