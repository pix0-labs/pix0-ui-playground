import { TestBannersView } from "./TestBannersView";
import { TestCardsView } from "./TestCardsView";
import { Menu } from "./Menu";
import {ThemeProvider, ThemeToggle} from '@pix0/core-ui';
import { useState } from "react";
import { Button } from "@pix0/core-ui";

export enum ViewType {

    BANNERS_VIEW = 1,
    
    USER_FORM =2 ,

    PRODS_VIEW = 3,

    ACC_ITEMS_VIEW = 5,

    NONE = 4 ,

    MARKUP_ED = 6, 
    
    CARDS_VIEW = 7,


}

export function TestView () {

    const [viewType, setViewType] = useState<ViewType>(ViewType.NONE);

    

    const switchView = () =>{

        switch(+viewType) {

            case ViewType.BANNERS_VIEW :
                return <TestBannersView/>
            
            case ViewType.CARDS_VIEW :
                return <TestCardsView/>
           default :
                return <Menu setViewType={setViewType}/>;
        }
    }


    return <ThemeProvider>
        <div className="dark:bg-dark-bg bg-light-bg h-screen p-2">
        <div className="flex items-center">
            <ThemeToggle/>
            {viewType !== ViewType.NONE && <Button onClick={(e : any)=>{
                e.preventDefault();
                setViewType(ViewType.NONE)
            }} className="bg-gray-700 text-white px-2 text-sm font-bold ml-4">Back</Button>}
        </div>
        {switchView()}
        </div>
    </ThemeProvider>
}