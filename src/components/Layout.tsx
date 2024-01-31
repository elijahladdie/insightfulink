import { ReactNode } from "react"
import Navbar from "./Navbar";

interface LayoutPros {
    children: ReactNode;
}

const Layout: React.FC<LayoutPros> = ({ children }) => {
    return <div className="relative">
        <Navbar />
        {children}
    </div>
}

export default Layout