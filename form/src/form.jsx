import { useState } from "react"

export default function Form() {
    const [form, setForm] = useState({ name: "", age: "", city: "", contact: "", gender: "" })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form);
    }
    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col m-10 text-xl items-center">
            <div className="flex flex-col bg-gray-200 p-20 rounded-2xl">
                <h1 className="text-3xl px-15 mb-5">Registration</h1>
                <span><label className="mr-20">Name :</label>
                    <input value={form.name} name="name" onChange={handleChange} type="text" placeholder="Enter Your Name" />
                </span>
                <span><label className="mr-20">Age :</label>
                    <input value={form.age} name="age" onChange={handleChange} type="number" placeholder="Enter Your Age" />
                </span>
                <span><label className="mr-20">City :</label>
                    <input value={form.city} name="city" onChange={handleChange} type="text" placeholder="Enter Your City" />
                </span>
                <span><label className="mr-20">Contact :</label>
                    <input value={form.contact} name="contact" onChange={handleChange} type="number" placeholder="Enter Your Contact Details" />
                </span>
                <span><label className="mr-20">Gender :</label>
                    <input value={form.gender} name="gender" onChange={handleChange} type="text" placeholder="Enter your gender" />
                </span>

                <button className="mt-10" type="submit" >Submit</button>
            </div>
        </form>
    )
}