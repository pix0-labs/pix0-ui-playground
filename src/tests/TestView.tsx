import { TestBannersView } from "./TestBannersView";
import { TestCardsView } from "./TestCardsView";
import {ThemeProvider, ThemeToggle} from '@pix0/core-ui';

export function TestView () {

    return <ThemeProvider>
        <div className="dark:bg-dark-bg bg-light-bg h-screen p-2">
        <ThemeToggle/>
        <TestBannersView/>
        <TestCardsView/>
        </div>
    </ThemeProvider>
}