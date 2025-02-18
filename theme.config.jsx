import { useConfig } from 'nextra-theme-docs'
const currentYear = new Date().getFullYear();
import { useRouter } from 'next/router'


export default {
    logo: (
        <>
         <img src="/logostem3a.jpg" alt="STEM Lab | FPGA" width={40} height={10}/>
         
          <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
          | FPGA 
          </span>
        </>
      ),
      head: () => {
        const { asPath, defaultLocale, locale } = useRouter()
        const { frontMatter } = useConfig()
        const url =
          'https://stem-lab-fpga.vercel.app' +
          (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
     
        return (
          <>
            <meta property="og:url" content={url} />
            <meta property="og:title" content={frontMatter.title || 'STEM Lab FPGA: Inspiring STEM Education Through FPGA Technology'} />
            <meta
              property="og:description"
              content={frontMatter.description || 'Welcome to STEM Lab FPGA! We are passionate engineering lecturers dedicated to promoting STEM education. Learn about FPGA, DE10-lite, and meet our team led by Jehovah Yii Zui Hon and Prof Madya Ir. Dr. Nurul Hazlina Noordin.'}
            />
          </>
        )
      },
    project: {
      link: 'https://github.com/hovahyii/STEM-Lab-FPGA'
    },
    footer: {
        text: `${currentYear} © STEM Lab UMPSA.`,
      },
    docsRepositoryBase: 'https://github.com/hovahyii/STEM-Lab-FPGA',
    // banner: {
    //     key: '2.0-release',
    //     text: (
    //       <a href="https://nextra.site" target="_blank">
    //         🎉 Nextra 2.0 is released. Read more →
    //       </a>
    //     )
    //   },
      useNextSeoProps() {
        const { frontMatter } = useConfig()
        return {
          additionalLinkTags: [
            {
              href: '/apple-touch-icon.png',
              rel: 'apple-touch-icon',
              sizes: '180x180'
            },
            {
              href: '/android-chrome-192x192.png',
              rel: 'icon',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              href: '/android-chrome-512x512.png',
              rel: 'icon',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              href: '/favicon-32x32.png',
              rel: 'icon',
              sizes: '32x32',
              type: 'image/png'
            },
            {
              href: '/favicon-16x16.png',
              rel: 'icon',
              sizes: '16x16',
              type: 'image/png'
            }
          ],
   
          additionalMetaTags: [
            { content: 'STEM Lab FPGA: Inspiring STEM Education Through FPGA Technology', name: 'title'},
            { content: 'Welcome to STEM Lab FPGA! We are passionate engineering lecturers dedicated to promoting STEM education. Learn about FPGA, DE10-lite, and meet our team led by Jehovah Yii Zui Hon and Prof Madya Ir. Dr. Nurul Hazlina Noordin.', name: 'description'},
            { content: 'en', httpEquiv: 'Content-Language' },
            { content: 'STEM Lab FPGA', name: 'apple-mobile-web-app-title' },
            { content: '#fff', name: 'msapplication-TileColor' },
            { content: '/android-chrome-512x512.png', name: 'msapplication-TileImage' }
          ],
          description:
            frontMatter.description || 'STEM Lab FPGA',
          openGraph: {
            title: 'STEM Lab FPGA: Inspiring STEM Education Through FPGA Technology',
            description: 'Welcome to STEM Lab FPGA! We are passionate engineering lecturers dedicated to promoting STEM education. Learn about FPGA, DE10-lite, and meet our team led by Jehovah Yii Zui Hon and Prof Madya Ir. Dr. Nurul Hazlina Noordin.',
            images: [
              { url: frontMatter.image || 'https://stem-lab-fpga.vercel.app/logostem3a.jpg' }
            ]
          },
          titleTemplate: '%s – STEM Lab FPGA',
          twitter: {
            cardType: 'summary_large_image',
            site: 'https://stem-lab-fpga.vercel.app'
          },

      }
  
    }
}