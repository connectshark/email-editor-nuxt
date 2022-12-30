<template>
  <NuxtLayout>
    <form @submit.prevent="submitHandler">
      <p class="mb-8">
        <input required minlength="3" type="email" v-model="email"
          class="bg-white p-3 px-4 w-full rounded-2xl text-stone-900 placeholder:text-stone-500 outline-primary"
          placeholder="Email to">
      </p>
      <p class="mb-8">
        <input required minlength="1" type="text" v-model="title"
          class="bg-white p-3 px-4 w-full rounded-2xl text-stone-900 placeholder:text-stone-500 outline-primary"
          placeholder="Email Title">
      </p>
      <div>
        <p v-html="content"></p>
      </div>
      <div class=" mb-8">
        <Editor :api-key="apiKey" v-model="content" :init="{
          language: 'zh_TW',
          height: 500,
          plugins: ['emoticons', 'table', 'image']
        }"></Editor>
      </div>
      <div class=" text-right">
        <span v-if="error">好像有錯誤</span>
        <span v-if="success">送出成功</span>
        <button :disabled="loading" class=" p-3 hover:opacity-70 transition rounded-full bg-primary text-white disabled:text-stone-300" type="submit">送出</button>
      </div>
    </form>
  </NuxtLayout>
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'
const apiKey = `vbo1axixc4frjzz0hcm95dhzla3pezml0plgv5d5li5k5r9m`
const content = ref(``)
const email = ref('')
const title = ref('')



const {
  loading,
  send,
  success,
  error
} = useMail()
const submitHandler = () => {
  send({
    title: title.value,
    to: email.value,
    content: content.value
  })
}


watch(success, value => {
  if (value) {
    content.value = ''
    title.value = ''
    email.value = ''
  }
})

</script>