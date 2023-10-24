import { Footer, Header, Sidebar } from "components"
import { Outlet } from 'react-router-dom'

export const PrintLayout = () => {
  return (
    <div>
        <Header />
        <main className="grid grid-cols-8">
            <div className="col-span-1">
                <Sidebar />
            </div>
            <div className="col-span-7">
                <Outlet />
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default PrintLayout