import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  compressHTML: true,
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
      components: {
        TableOfContents: './src/components/overrides/TableOfContents.astro',
      },

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
