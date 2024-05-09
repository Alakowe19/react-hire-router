import { useState } from "react";

function HireForm() {
  const [wage, setWage] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    // Perform hire logic here
    console.log('Hiring:', wage);
    setWage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        value={wage}
        onChange={e => setWage(e.target.value)}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm