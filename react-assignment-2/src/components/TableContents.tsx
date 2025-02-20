import {TableCell, TableRow} from "@/components/ui/table.js";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.js";
import {User} from "@/types/types.ts";

function TableContents({unit}:{unit:User}) {
    return (
        <TableRow key={unit.id}>
            <TableCell className="text-center px-5">{unit.id}</TableCell>
            <TableCell className="text-center px-5"> <Avatar>
                <AvatarImage src={unit.avatar} alt={unit.first_name}/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar></TableCell>
            <TableCell className="text-center px-5">{unit.first_name}</TableCell>
            <TableCell className="text-center px-5">{unit.last_name}</TableCell>
            <TableCell className="text-center px-5">{unit.email}</TableCell>
        </TableRow>
    )
}

export default TableContents;