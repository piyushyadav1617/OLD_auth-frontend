import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table";

interface OrgTableType {
    dat: Array<any>;
}

const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-IN', options).toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
};

export function OrgTable({ data }: OrgTableType) {
    return (
        <Table className="max-h-[420px] overflow-y-auto">
            <TableCaption>Organization List</TableCaption>
            <TableHeader>
                <TableRow className="bg-slate-100">
                    <TableHead className="min-w-max"></TableHead>
                    <TableHead className="min-w-max">Organization</TableHead>
                    <TableHead className="min-w-max">Organization Name</TableHead>
                    <TableHead className="min-w-max">Organization ID</TableHead>
                    <TableHead className="min-w-max">Plan Validity</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={item.index} className="font-semibold">
                        <StyledCell value="Manage" className="bg-[#4338ca] text-white" />
                        <StyledCell value={item.name} />
                        <StyledCell value={item.name} />
                        <StyledCell value={item.alt_id} />
                        <StyledCell value={convertTimestampToDate(item.validity * 1000)} />
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

const StyledCell = ({ value, className = "" }) => {
    return (
        <TableCell>
            <p className={`bg-gray-200 text-center px-4 py-1.5 text-slate-700 rounded-sm min-w-max ${className}`}>
                {value}
            </p>
        </TableCell>
    );
}
