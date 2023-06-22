import AccountNav from "./components/Nav"
import { Sidebar } from "./components/Sidebar"

interface AccountLayoutType {
    children: React.ReactNode
}
function AccountLayout({ children }: AccountLayoutType) {
    return (
        <div className="flex" >
            <div className="flex-[15%]" >
                <Sidebar />
            </div>
            <div className="flex-[85%] px-4 py-3" >
                <AccountNav />
                <div className="mt-4" >
                    {children}
                </div>
            </div>
        </div>

    )
}

export default AccountLayout