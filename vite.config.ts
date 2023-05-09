import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
// import eslint from 'vite-plugin-eslint'



const config = defineConfig(() => {
  

  return  {

    plugins: [
      react()],
    resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
    server: {
      
      port: ( 8000)
    }
  }
})

export default config