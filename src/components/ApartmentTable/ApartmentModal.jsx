import ApartmentForm from "./ApartmentForm";

export default function ApartmentModal({ data, onClose, onSave }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img
          src={
            data.isNew
              ? "https://picsum.photos/400/250"
              : `https://picsum.photos/seed/${data.id}/400/250`
          }
          alt="apartment"
          className="modal-image"
        />

        <ApartmentForm initialData={data} onSubmit={onSave} />

        <div className="modal-footer">
          <button className="details-btn" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
