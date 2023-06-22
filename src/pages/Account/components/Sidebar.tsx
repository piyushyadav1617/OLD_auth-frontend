import React from 'react'
import { Sidebar as ProSidebar, Menu, MenuItem, } from 'react-pro-sidebar';
import { NavLink as Link } from 'react-router-dom';
import { OrgnaizationSvg, SettingSvg, SupportSvg } from '../../../assets/Svg/Account/Account';


export function Sidebar() {
    return (
        <div className='bg-black text-white w-full min-h-screen'    >
            <ProSidebar className='p-4 w-full' >
                <Menu
                    className='bg-black hover:bg-red-500 w-full'
                    menuItemStyles={{
                        button: {
                            // the active class will be added automatically by react router
                            // so we can use it to style the active menu item
                            borderRadius: "3px",
                            padding: "16px",
                            [`&.active`]: {
                                backgroundColor: "rgba(255,255,255,0.24)",
                            },
                            [`&:hover`]: {
                                backgroundColor: "rgba(255,255,255,0.2)"
                            },
                        },
                    }}
                >
                    <div className='text-center mb-12 text-3xl font-semibold text-[#9EFF00]' >
                        <h1>Organization</h1>
                    </div>
                    <p className='mb-1 ml-4 text-xs text-gray-500 ' > MAIN MENU</p>
                    <SidebarMenu to='/account/org' title='Organizations' icon={<OrgnaizationSvg />} />
                    <p className='mb-1 ml-4 text-xs text-gray-500 mt-12' >OTHER</p>
                    <SidebarMenu to='/account/support' title='Support' icon={<SupportSvg />} />
                    <SidebarMenu to='/account/settings' title='Setting' icon={<SettingSvg />} />
                </Menu>
            </ProSidebar>
        </div>

    )
}

interface SidebarMenuType {
    icon: React.ReactNode;
    title: string;
    to: string;
}


const SidebarMenu = ({ icon, title, to }: SidebarMenuType) => {
    return (
        <MenuItem component={<Link to={to} />} icon={icon} active={"exact"} >
            {title}
        </MenuItem>
    )
}