import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect( () => {
        fetch('/categories.json')
        .then(res => res.json())
        .then( data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-2xl font-bold">All Category</h2>
            {
                categories.map(category => <NavLink to={`/category/${category.id}`} className="block ml-4 text-xl font-medium" key={category.id}>{category.name}</NavLink>)
            }

        </div>
    );
};

export default LeftSideNav;