import React from 'react'

const Favicon = () => {
  return (
    <>
      <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/icons/touch-icon-ipad.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/icons/touch-icon-iphone-retina.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='167x167'
        href='/icons/touch-icon-ipad-retina.png'
      />

      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/icons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/icons/favicon-16x16.png'
      />
      <link rel='manifest' href='/manifest.json' />
      <link
        rel='mask-icon'
        href='/icons/safari-pinned-tab.svg'
        color='#5bbad5'
      />
      <link rel='shortcut icon' href='/favicon.ico' />
    </>
  );
}

export default Favicon