
import * as React from "react"
import { DropdownMenuCheckboxItemProps, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { AddItemSvg, BillingSvg, CloudSvg, GithubSvg, InviteSvg, LogOutSvg, ProfileItemSvg, SettingsSvg, TeamSvg } from "../../../assets/Svg/Account/DropDown"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function AccountDropdown() {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-semibold  active:border-0 active:outline-none" >
                Admirra John <ChevronDown className="mt-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <MenuItem icon={<ProfileItemSvg />} title="Profile" />
                <MenuItem icon={<BillingSvg />} title="Billing" />
                <MenuItem icon={<SettingsSvg />} title="Setting" />
                <DropdownMenuSeparator />
                <MenuItem icon={<TeamSvg />} title="Team" />
                <MenuItem icon={<InviteSvg />} title="Invite users" />
                <MenuItem icon={<AddItemSvg />} title="New Item" />
                <MenuItem icon={<GithubSvg />} title="Github" />
                <MenuItem icon={<InviteSvg />} title="Support" />
                <div className="opacity-40" >
                    <MenuItem icon={<CloudSvg />} title="Api" />
                </div>
                <DropdownMenuSeparator />

                <MenuItem icon={<LogOutSvg />} title="Log Out" />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


interface MenuItemType {
    icon: React.ReactNode;
    title: string;
}

const MenuItem = ({ icon, title }: MenuItemType) => {
    return (
        <DropdownMenuItem className="flex items-center p-1 hover:border-0 hover:outline-none hover:bg-gray-100 rounded-sm" >
            <span className="w-5 h-5 mt-1" >{icon}</span>
            <span className="ml-2" > {title} </span>
        </DropdownMenuItem>
    )
}

