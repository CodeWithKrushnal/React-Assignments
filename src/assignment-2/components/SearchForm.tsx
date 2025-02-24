import {Input} from "@/assignment-1/components/ui/input.tsx";
import {JSX} from "react";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {Button} from "@/assignment-1/components/ui/button.tsx";


const SearchForm = ({useSearch}: {
    useSearch: (event: React.KeyboardEventHandler<HTMLInputElement>) => void
}): JSX.Element => {
    return (<>
            <Button size="icon" variant="outline">
                <MagnifyingGlassIcon/>
            </Button>
            <Input type="text" placeholder="Search By Anything" onKeyUp={useSearch}/>
        </>
    )
}

export default SearchForm;