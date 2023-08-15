import { ViewType } from "./TestView";
import { AccordionItem } from "@pix0/sfw-ui";

type props = {
    setViewType : (v : ViewType) => void, 
}


export function Menu({
    setViewType
}: props){

    return <div className="mx-auto w-3/5 p-2">
        <div className="mt-2 p-2 rounded dark:hover:bg-gray-400 hover:bg-gray-300 dark:bg-gray-200 dark:text-gray-900 cursor-pointer"
        onClick={()=>{
            setViewType(ViewType.BANNERS_VIEW)
        }}>
            Test Banners 
        </div>
        <div className="mt-2 p-2 rounded dark:hover:bg-gray-400 hover:bg-gray-300 dark:bg-gray-200 dark:text-gray-900 cursor-pointer"
         onClick={()=>{
            setViewType(ViewType.CARDS_VIEW)
        }}>
            Test Cards
        </div>
        <div className="mt-10">
        <AccordionItem title={"Why does the tailwind css does't work well?"}>
            Sorry we haven't got a clue yet!
        </AccordionItem>

        </div>
        {/*
        <div className="mt-2 p-2 rounded dark:hover:bg-gray-400 hover:bg-gray-300 dark:bg-gray-200 dark:text-gray-900 cursor-pointer"
         onClick={()=>{
            setViewType(ViewType.PRODS_VIEW)
        }}>
            Test Products
    </div>*/}
    </div>
}