import { useLocation } from "react-router-dom"
import AccountLayout from "./Layout"
import Settings from "./Pages/Setting"
import Support from "./Pages/Support"
import AddOrg from "./components/AddOrg"
import OrgList from "./components/OrgList"


function Account() {

    const location = useLocation()


    return (
        <AccountLayout>

            {
                location.pathname === "/account/settings" ?
                    <Settings /> : location.pathname === "/account/org" ?
                        <AddOrg /> : location.pathname === "/account/support" ? <Support /> : location.pathname === "/account/orglist" ? <OrgList /> : "Not Found"
            }

        </AccountLayout>

    )
}

export default Account