import { defineConfig, UserConfig } from 'vitepress'
import tailwindcss from "@tailwindcss/vite";

// https://vitepress.dev/reference/site-config
const defaultConfig = defineConfig({
  title: "booking",
  description: "Flagrant·es est une association qui promeut des groupes de métal avec un line-up qui n'est pas exclusivement masculin.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

const config: UserConfig = {
  ...defaultConfig,
  vite: {
    plugins: [tailwindcss()],
  },
  // ... rest of config
};

export default config