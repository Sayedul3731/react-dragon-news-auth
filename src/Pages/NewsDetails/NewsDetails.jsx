import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const NewsDetails = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1>News Details page</h1>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3"></div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;