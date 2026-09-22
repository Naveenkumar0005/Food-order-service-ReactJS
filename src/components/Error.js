import {useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>{error.status} - {error.statusText || "Page not found"}</h1>
        </div>
    );
};

export default Error;