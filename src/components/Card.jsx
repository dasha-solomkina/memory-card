export default function Card({ name, img }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
}
