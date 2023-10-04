import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import {useContext} from "react"


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
     const form = new FormData(e.currentTarget)
     const name = form.get('name')
     const email = form.get('email')
     const password= form.get('password')
     const photo = form.get('photo')
    console.log(name, email, password, photo);
    createUser(email, password)
    .then(result => {
        console.log(result.user);
    })
    .catch(error => {
        console.error(error);
    })
    }
    return (
        <div>
        <Navbar></Navbar>
        <div className="">
            <h1 className="text-3xl font-semibold text-center my-10">Please Register</h1>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
        </div>
    </div>
    );
};

export default Register;