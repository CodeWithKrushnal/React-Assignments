import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/assignment-2/components/ui/table.tsx";
import {Resp, User} from "@/assignment-2/types/types.ts";
import TableContents from "@/assignment-2/components/TableContents.tsx";

const TableContainer = ({data}: { data: Resp }) => {
    return (<Table>
        <TableCaption className="pb-5">A Demo For React UseEffect Hook</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead className="text-center py-3">ID</TableHead>
                <TableHead className="text-center py-3">Avatar</TableHead>
                <TableHead className="text-center py-3">First Name</TableHead>
                <TableHead className="text-center py-3">Last Name</TableHead>
                <TableHead className="text-center py-3">Email</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {data.data.map((unit: User) => (
                <TableContents unit={unit}/>
            ))}
        </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colSpan={5}>Total Users: {data.total}</TableCell>
            </TableRow>
        </TableFooter>
    </Table>)
}

export default TableContainer;