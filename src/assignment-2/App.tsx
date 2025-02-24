import TableContainer from "@/assignment-2/components/TableContainer.tsx";


function App() {


    return (
        < div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0 pb-10 pt-10 items-center">React
                UseEffect and Custom Hook Demo</h1>
            <div className="w-xl">
                <TableContainer key="tableContainer"/>
            </div>
        </div>
    )
}

export default App
