import {useEffect} from "react";

export const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Maiden`;
    }, [title]);
    return null;
}