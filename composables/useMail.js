export default function () {
  const loading = ref(false)
  const success = ref(false)
  const error = ref(false)
  const send = async ({ title, content, to }) => {
    loading.value = true
    success.value = false
    error.value = false
    const fetch_response = await fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify({
        title,
        content,
        to
      })
    })
    const res = await fetch_response.json()
    if (res[0] !== null) {
      error.value = true
    } else {
      success.value = true
    }
    loading.value = false
  }

  return {
    loading,
    send,
    success,
    error
  }
}