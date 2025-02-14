import React, { useState } from "react";
import "./PassengerCountInput.css";

function PassengerCountInput() {
  const [count, setCount] = useState(1);

  const updatePassengerCountStatus = (count) => {
    const $passengerCountStatus = document.querySelector(
      ".passenger-count-input-status"
    );
    $passengerCountStatus.textContent = `성인 승객 현재 ${count}명`;

    setTimeout(() => {
      $passengerCountStatus.textContent = "";
    }, "5000");
  };

  const handleDecreaseCount = () => {
    if (count === 0) {
      alert("0명보다 아래를 선택할 수 없습니다.");
      return;
    }

    const updateCount = count - 1;

    setCount(updateCount);
    updatePassengerCountStatus(updateCount);
  };

  const handleIncreaseCount = () => {
    if (count === 3) {
      alert("최대 3명까지 선택가능합니다.");
      return;
    }

    const updateCount = count + 1;

    setCount(updateCount);
    updatePassengerCountStatus(updateCount);
  };

  return (
    <>
      <h2>승객 선택</h2>

      {/* TODO: 이후 이 부분은 재사용 컴포넌트로 빼도 될듯 (성인 이외 다른 것도 들어올 수 있도록)  */}
      <div className="passenger-type-container">
        <label className="passenger-type-name" htmlFor="adult">
          성인
        </label>
        <button
          className="passenger-type-explanation-button"
          aria-label="성인 승객에 대한 설명 보기"
        >
          <span className="tooltip-icon" aria-hidden="true">
            ?
          </span>
        </button>
      </div>

      <div className="passenger-count-input-container">
        <button
          className={
            count === 0
              ? "spin-button count-decrease disabled"
              : "spin-button count-decrease"
          }
          onClick={handleDecreaseCount}
          aria-label="성인 승객 한명 줄이기"
        >
          <span aria-hidden="true">-</span>
        </button>
        <input
          className="passenger-count-input"
          id="adult"
          type="number"
          min="0"
          max="3"
          value={count}
        />
        <button
          onClick={handleIncreaseCount}
          className={
            count === 3
              ? "spin-button count-increase disabled"
              : "spin-button count-increase"
          }
          aria-label="성인 승객 한명 늘리기"
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
      <span
        role="status"
        className="passenger-count-input-status invisible"
        aria-live="polite"
      ></span>
    </>
  );
}

export default PassengerCountInput;
