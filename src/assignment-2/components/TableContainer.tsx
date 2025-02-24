import {Resp, User} from "@/assignment-2/types/types.ts";
import {JSX, useEffect, useState} from "react";
import {fetchUsers} from "@/assignment-2/services/userService.ts";
import TableStructure from "@/assignment-2/components/ui/TableStructure.tsx";
import SearchForm from "@/assignment-2/components/SearchForm.tsx";

const TableContainer = (): JSX.Element => {

    const [data, setData] = useState({page: 0, per_page: 0, total: 0, total_pages: 0, data: [],} as Resp);
    const [displayData, setDisplayData] = useState({page: 0, per_page: 0, total: 0, total_pages: 0, data: []} as Resp);

    useEffect(() => {
            const getUsers = async () => {
                try {
                    const data: Resp = await fetchUsers();
                    setData(data);
                    setDisplayData(data)
                } catch (error) {
                    console.log(error);
                }
            }
            getUsers();
        }, []
    )

    // Custom Hook
    const useSearch = (event: React.KeyboardEventHandler<HTMLInputElement>): void => {
        console.log(event);
        const res = data.data.filter((unit: User): boolean => unit.first_name.toLowerCase().includes(event.target.value.toLowerCase()) || unit.last_name.toLowerCase().includes(event.target.value.toLowerCase()) || unit.email.toLowerCase().includes(event.target.value.toLowerCase()) || unit.id.toString().includes(event.target.value));
        setDisplayData({
            page: data.page,
            per_page: data.per_page,
            total: data.total,
            total_pages: data.total_pages,
            data: res
        })
    }

    return (<>
        <div className="text-center justify-center flex w-full items-center space-x-2 pb-10">
            <SearchForm useSearch={useSearch}/>
        </div>
        <div className="min-w-xl border-2 border-gray-600 rounded-xl shadow-lg shadow-cyan-500/50">
            <TableStructure data={displayData}/>
        </div>
    </>)
}

export default TableContainer;