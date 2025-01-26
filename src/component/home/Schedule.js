import ScheduleImg from "../../image/schedule.png";

function Schedule() {
  return (
    <div>
      <button>&lt;</button>
      <form>
        <div>
          <label>Enter Date</label>
          <input type="date" />
          <label>Select the timing</label>
          <select>
            <option>11AM to 3PM</option>
            <option>3PM to 8PM</option>
          </select>
          <label>Select an Address</label>
          <div>
            <input type="text" placeholder="Enter Full Address" />
            <input type="text" placeholder="Landmark" />
            <input type="text" placeholder="Pincode" />
          </div>
          <label>Estimated Weight</label>
          <select>
            <option>Less than 20kg</option>
            <option>20-50kg</option>
            <option>50-100kg</option>
            <option>100-700kg</option>
            <option>More than 700kg</option>
          </select>
          <label>
            Remarks<span>(Optional)</span>
          </label>
          <textarea />
          <input type="submit" />
        </div>
      </form>
      <img />
    </div>
  );
}

export default Schedule;
