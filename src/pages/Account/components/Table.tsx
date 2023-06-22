import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table"

const data = [
    {
        action: "Manage",
        org: "Flitchcoin",
        orgName: "Flitchcoin",
        orgId: "xyzkuchbhinamelikhde",
        validity: "02-aug-2023",
    },
    {
        action: "Manage",
        org: "Flitchcoin",
        orgName: "Flitchcoin",
        orgId: "xyzkuchbhinamelikhde",
        validity: "02-aug-2023",
    },
    {
        action: "Manage",
        org: "Flitchcoin",
        orgName: "Flitchcoin",
        orgId: "xyzkuchbhinamelikhde",
        validity: "02-aug-2023",
    },
    {
        action: "Manage",
        org: "Flitchcoin",
        orgName: "Flitchcoin",
        orgId: "xyzkuchbhinamelikhde",
        validity: "02-aug-2023",
    },
    {
        action: "Manage",
        org: "Flitchcoin",
        orgName: "Flitchcoin",
        orgId: "xyzkuchbhinamelikhde",
        validity: "02-aug-2023",
    },
    {
        action: "Manage",
        org: "Flitchcoin",
        orgName: "Flitchcoin",
        orgId: "xyzkuchbhinamelikhde",
        validity: "02-aug-2023",
    },
]

export function OrgTable() {
    return (
        <Table className="max-h-[400px] overflow-y-auto" >
            <TableCaption>Organization List</TableCaption>
            <TableHeader>
                <TableRow  >
                    <TableHead className="min-w-max"></TableHead>
                    <TableHead>Orgnaization</TableHead>
                    <TableHead>Orgnaization Name</TableHead>
                    <TableHead>Orgnaization ID</TableHead>
                    <TableHead>Plan Validity</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.orgId} className="font-semibold" >
                        <TableCell className="font-medium ">
                            <button className="bg-[#4338CA] px-4 py-1.5 text-white rounded-sm" >
                                {item.action}
                            </button>
                        </TableCell>
                        <TableCell  >
                            <button className="bg-gray-200 min-w-[120px] px-4 py-1.5 text-slate-700 rounded-sm" >
                                {item.org}
                            </button>
                        </TableCell>
                        <TableCell>
                            <button className="bg-gray-200 min-w-[120px] px-4 py-1.5 text-slate-700 rounded-sm" >
                                {item.orgName}
                            </button>

                        </TableCell>
                        <TableCell >
                            <button className="bg-gray-200 min-w-[120px] px-4 py-1.5 text-slate-700 rounded-sm" >
                                {item.orgId}
                            </button>
                        </TableCell>
                        <TableCell > <button className="bg-gray-200 min-w-[120px] px-4 py-1.5 text-slate-700 rounded-sm" >
                            {item.validity}
                        </button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}
