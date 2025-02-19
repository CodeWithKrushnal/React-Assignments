import './App.css'
import {useEffect, useState} from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

type user = {
    "id": number,
    "email": string,
    "first_name": string,
    "last_name": string,
    "avatar": string
}

type resp = {
    "page": number,
    "per_page": number,
    "total": number,
    "total_pages": number,
    "data": user[]
}

function App() {
    const [data, setData] = useState({
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0,
        data: [],
    } as resp);

    useEffect(() => {
            const fetchData = async () => {
                const response = await fetch("https://reqres.in/api/users?per_page=12");
                const json: resp = await response.json();
                setData(json);
            };
            fetchData();
        }, []
    )

    return (
        <center>
        < div>
            <h1 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0 pb-10 pt-10 items-center">React UseEffect Hook Demo</h1>
            <Table className="w-1/2">
                <TableCaption>A Demo For React UseEffect Hook</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Avatar</TableHead>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Email</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.data.map((unit: user) => (
                        <TableRow key={unit.id}>
                            <TableCell>{unit.id}</TableCell>
                            <TableCell> <Avatar>
                                <AvatarImage src={unit.avatar} alt="@shadcn"/>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar></TableCell>
                            <TableCell>{unit.first_name}</TableCell>
                            <TableCell>{unit.last_name}</TableCell>
                            <TableCell>{unit.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={5}>Total Users: {data.total}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
        </center>
    )
}

export default App
