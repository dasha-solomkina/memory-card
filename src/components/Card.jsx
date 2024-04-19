/* eslint-disable react/prop-types */

export default function Card({ name, img, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
}
