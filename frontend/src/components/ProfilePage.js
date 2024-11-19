import React from "react";

function ProfileComponent() {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.logo}>MY ACCOUNT</div>
        <div style={styles.userInfo}>
          <p style={styles.userName}>John Doe</p>
          <p style={styles.email}>johndoe0088@gmail.com</p>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <div style={styles.body}>
        <nav style={styles.sidebar}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>Orders</li>
           
            <li style={styles.navItem}>Favourites</li>
            <li style={styles.navItem}>Payments</li>
            <li style={styles.navItem}>Addresses</li>
            <li style={styles.navItem}>Settings</li>
          </ul>
        </nav>

        {/* Main Content */}
        <main style={styles.content}>
          <div style={styles.emptyState}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/014/814/239/non_2x/no-order-a-flat-rounded-icon-is-up-for-premium-use-vector.jpg"
              alt="No Orders"
              style={styles.placeholderImage}
            />
            <p style={styles.infoText}>Your orders with us will be listed here.</p>
            <p style={styles.infoText}>Go ahead and find some awesome offers for you...</p>
            <p style={styles.noOrdersText}>No Orders</p>
            <p style={styles.infoTextSmall}>You haven't placed any order yet.</p>
          </div>
        </main>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  userInfo: {
    textAlign: "right",
  },
  userName: {
    margin: "0",
    fontWeight: "bold",
  },
  email: {
    margin: "0",
    fontSize: "14px",
  },
  body: {
    display: "flex",
    height: "calc(100vh - 60px)",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRight: "1px solid #ddd",
  },
  navList: {
    listStyle: "none",
    padding: "0",
  },
  navItem: {
    margin: "10px 0",
    cursor: "pointer",
    fontSize: "16px",
    color: "#555",
  },
  content: {
    flex: "1",
    padding: "20px",
    textAlign: "center",
    color: "#333",
  },
  emptyState: {
    marginTop: "50px",
  },
  placeholderImage: {
    width: "100px",
    marginBottom: "30px",
  },
  infoText: {
    margin: "5px 0",
    fontSize: "16px",
  },
  infoTextSmall: {
    margin: "5px 0",
    fontSize: "14px",
    color: "#888",
  },
  noOrdersText: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  },
};

export default ProfileComponent;
