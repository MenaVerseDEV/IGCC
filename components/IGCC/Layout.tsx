import { Fragment, ReactNode } from 'react'
import FooterV2 from '../shared/FooterV2'
import Navbar from './Navbar'

const Layout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <Fragment>
      <Navbar />
      <main className="relative z-10 overflow-hidden">{children}</main>

      <FooterV2 />
    </Fragment>
  )
}

export default Layout
