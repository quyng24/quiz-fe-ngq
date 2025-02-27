import { useRoutes } from "react-router-dom"
import { route } from "../../routes"

function AllRouter() {
    const element = useRoutes(route);
    return (
        <>
            {element}
        </>
    )
}
export default AllRouter;