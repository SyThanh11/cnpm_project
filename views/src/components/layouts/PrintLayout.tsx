import { Footer, Header, Sidebar } from "components"
import { Outlet } from 'react-router-dom'

export const PrintLayout = () => {
  return (
    <div>
        <Header />
        <main className="grid grid-cols-8 h-screen">
            <div className="col-span-1 h-screen">
                <Sidebar />
            </div>
            <div className="col-span-7 h-screen">
                <Outlet />
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default PrintLayout