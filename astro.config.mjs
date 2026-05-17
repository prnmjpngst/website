import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Panduan KIR',
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/prnmjpngst',
        },
      ],

      sidebar: [
        {
          label: 'Panduan',
          items: [
            {
              autogenerate: {
                directory: 'panduan',
              },
            },
          ],
        },

        {
          label: 'Regulasi',
          items: [
            {
              autogenerate: {
                directory: 'regulasi',
              },
            },
          ],
        },

        {
          label: 'FAQ',
          items: [
            {
              autogenerate: {
                directory: 'faq',
              },
            },
          ],
        },

        {
          label: 'Istilah',
          items: [
            {
              autogenerate: {
                directory: 'istilah',
              },
            },
          ],
        },
      ],
    }),
  ],
});
