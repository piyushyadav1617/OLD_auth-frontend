import { AddItemSvg } from "../../../assets/Svg/Account/DropDown"
import { Input } from "../../../components/ui/Input"
import { OrgTable } from "./Table"

function OrgList() {
    return (
        <section className="max-w-[1180px] pt-9" >
            <div className="flex items-center justify-between" >
                <div className="max-w-2xl" >
                    <h1 className="font-bold text-3xl" >Your Organizations</h1>
                    <p className="mt-2" >Represent an individual organization containing teams, business customers, and partner companies that access your applications as organizations in Authx.</p>
                </div>
                <button className="bg-[#9EFF00] rounded-sm text-black flex items-center py-2 px-3 min-w-max" >
                    <span className="mt-0.5 mr-1" >
                        <AddItemSvg />
                    </span>
                    Create New Organization
                </button>
            </div>

            <div className="mt-12" >
                <p>Search Organization</p>
                <div className="flex gap-2 items-center" >
                    <Input type="email" placeholder="Email" className="w-full border-2 focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 text-start" />
                    <button className="px-12 py-2 bg-[#4338CA] text-white rounded-sm" >Search</button>
                    <button className="px-12 py-2 bg-[#fff] text-black border-2 border-gray-300 font-semibold rounded-sm max-w-max w-full" >Search by</button>
                </div>
            </div>


            <div className="max-h-[400px] overflow-hidden mt-12" >
                <OrgTable />
            </div>
        </section>
    )
}

export default OrgList