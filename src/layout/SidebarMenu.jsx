export default function SidebarMenu({ role }) {
  return (
    <div className="sidebar">
      {role === "admin" && (
        <>
          <h3>Crear</h3>
          <ul>
            <li>Apartment</li>
            <li>Duplex</li>
            <li>House</li>
            <li>TownHouse</li>
            <li>Owner</li>
            <li>Reviewer</li>
            <li>Contract</li>
            <li>School</li>
          </ul>

          <h3>Asignar</h3>
          <ul>
            <li>SchoolsToProperties</li>
            <li>ReviewsToProperty</li>
            <li>ReviewersToReviews</li>
            <li>OwnerAndPropertyToContract</li>
          </ul>
        </>
      )}

      {role === "user" && (
        <>
          <h3>Ver</h3>
          <ul>
            <li>Apartment</li>
            <li>Duplex</li>
            <li>House</li>
            <li>TownHouse</li>
            <li>School</li>
          </ul>

          <h3>Review nueva</h3>
        </>
      )}
    </div>
  );
}
