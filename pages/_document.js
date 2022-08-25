import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
   <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
        </Script>
        
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        
        <NextScript />
        <Script id="script" strategy="lazyOnload">
          {`
             var bookero_config = {
              id: '5PiKYeuzS4lN',
              container: 'bookero',
              type: 'calendar',
              position: '',
              plugin_css: true,
              lang: 'pl'
            };
          
            (function() {
            var d = document, s = d.createElement('script');
            s.src = 'https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js';
            d.body.appendChild(s);
            })();
                `}
        </Script>
        {/* <div
          id="script"
          dangerouslySetInnerHTML={{ __html: `<script type="text/javascript">
          var bookero_config = {
            id: '5PiKYeuzS4lN',
            container: 'bookero',
            type: 'calendar',
            position: '',
            plugin_css: true,
            lang: 'pl'
          };
        
          (function() {
          var d = document, s = d.createElement('script');
          s.src = 'https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js';
          d.body.appendChild(s);
          })();
        </script>` }}
        /> */}

      </body>
    </Html>
  );
}
