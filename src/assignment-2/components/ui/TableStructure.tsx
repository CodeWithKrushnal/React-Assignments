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
import TableContents from "@/assignment-2/components/TableContents.tsx";
import {Resp, User} from "@/assignment-2/types/types.ts";

const TableStructure = ({data}: { data: Resp }) => {
    return (
        <Table key="tableContainertable">
            <TableCaption className="pb-5">A Demo For React UseEffect Hook</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center py-3" key="ID">ID</TableHead>
                    <TableHead className="text-center py-3" key="Avatar">Avatar</TableHead>
                    <TableHead className="text-center py-3" key="First Name">First Name</TableHead>
                    <TableHead className="text-center py-3" key="Last Name">Last Name</TableHead>
                    <TableHead className="text-center py-3" key="Email">Email</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.data.map((unit: User) => (
                    <TableContents unit={unit} key={unit.id}/>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={5}>Total Users: {data.total}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

export default TableStructure;