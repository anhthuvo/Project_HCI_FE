import { theme } from "antd";
import { Header as HeaderAnt } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const Header = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
      
    return (
        <HeaderAnt style={{ background: colorBgContainer }} className=" shadow-gray-200 shadow-sm">
            <div className="flex flex-row justify-between items-center">
                <Link to="/" ><img src={"/logo.png"} className="h-12"/></Link>
                <div className="text-black space-x-8">
                    <Link to="/analysis" >Analysis</Link>
                    <Link to="/exercises">Exercise</Link>
                    <Link to="/analysis">Workout Schedule</Link>
                </div>
            </div>
        </HeaderAnt>
    );
};

export default Header;