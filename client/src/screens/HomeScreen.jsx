import HeaderBar from "../components/HeaderBar"
import Sidebar from "../components/Sidebar"

const HomeScreen = () => {
    return (
        <div className="flex scroll-smooth">
            <Sidebar />
            <HeaderBar />
        </div>
    )
}

export default HomeScreen
