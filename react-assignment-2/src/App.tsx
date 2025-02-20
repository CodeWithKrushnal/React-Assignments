import {useEffect, useState} from "react";
import {Resp} from '@/types/types'
import TableContainer from "@/components/TableContainer.tsx";


function App() {
    const [data, setData] = useState({page: 0, per_page: 0, total: 0, total_pages: 0, data: [],} as Resp);

    useEffect(() => {
            const fetchData = async () => {
                const response = await fetch("https://reqres.in/api/users?per_page=12");
                const json: Resp = await response.json();
                setData(json);
            };
            fetchData();
        }, []
    )

    return (
        < div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0 pb-10 pt-10 items-center">React
                UseEffect Hook Demo</h1>
            <div className="max-w-fit border-2 border-gray-600 rounded-xl shadow-lg shadow-cyan-500/50">
                <TableContainer data={data}/>
            </div>
        </div>
    )
}

export default App
