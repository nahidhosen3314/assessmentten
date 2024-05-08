import { useEffect } from "react";

const useTitle = ({ title }) => {
    useEffect(() => {
        document.title = `${title} | Happy Travel`;
    }, [title]);
};

export default useTitle;
