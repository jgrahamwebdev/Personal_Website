import HeaderBar from "../components/HeaderBar"
import Sidebar from "../components/Sidebar"

const HomeScreen = () => {
    return (
        <div className="flex">
            <Sidebar />
            <HeaderBar />
        </div>
    )
}

export default HomeScreen
