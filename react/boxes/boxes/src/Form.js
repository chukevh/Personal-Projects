import React from "react"

export default function Form() {
    const [form, setForm] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email:"", 
            comment: "", 
            isErica: true,
            employment: "",
            favColor: ""
        }
    )
    console.log(form.favColor)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setForm(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Enter your First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={form.firstName} //controlled forms
                />
                <input
                    type="text"
                    placeholder="Enter your Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={form.lastName}
                />
                <input
                    type="email"
                    placeholder="Enter your Email"
                    onChange={handleChange}
                    name="email"
                    value={form.email}
                />
                <textarea 
                    placeholder="Comments"
                    onChange={handleChange}
                    name="comment"
                    value={form.comment}
                />
                <input 
                    type="checkbox"
                    name="isErica"
                    id="isErica"
                    checked={form.isErica}
                    onChange={handleChange}
                />
                <label htmlFor="isErica">Is Erica Cute</label>
                <br />

                <fieldset>
                    <legend>Current employment status</legend>
                    <input 
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={form.employment === "unemployed"}
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />

                    <input 
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={form.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-Time</label>
                    <br />

                    <input 
                        type="radio"
                        id="full-time"
                        name="employment"
                        checked={form.employment === "full-time"}
                        value="full-time"
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-Time</label>
                    <br />
                </fieldset>
                <br />

                <label htmlFor="favColor">What is your favourite color?</label>
                <br />
                <select
                    id="favColor"
                    value={form.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="">--Choose--</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
            
            </form>
        </div>
    )
}