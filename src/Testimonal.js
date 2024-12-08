import React from 'react';

const Testimonial = () => {
  return (
    <div style={styles.outer}>
    <div style={styles.container}>
      <h2 style={styles.title}>What our Customer Say</h2>
      <div style={styles.testimonialBox}>
        <p style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
          typesetting, remaining essentially unchanged. It was popularised in the 1960s...
        </p>
        <div style={styles.customerInfo}>
          <img
            src="https://via.placeholder.com/50" // Replace with the actual image URL
            alt="James Thomas"
            style={styles.image}
          />
          <div style={styles.name}>
            <h4 style={styles.customerName}>James Thomas</h4>
            <p style={styles.customerLocation}>Germany</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

const styles = {
   outer: {
     width: '100%',
     display: 'flex',
     padding: '50px',
    //  paddingLeft:'290px',
     justifyContent: 'center',
     alignItems: 'center',
     background: 'transparent'
   },
  container: {
    textAlign: 'center',
    width: '80%',
    padding: '20px',
    background: 'transparent',
  },
  title: {
    fontSize: '24px',
    color: '#fff',
  },
  testimonialBox: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  text: {
    fontSize: '16px',
    color: '#fff',
    marginBottom: '20px',
  },
  customerInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
  name: {
    textAlign: 'left',
  },
  customerName: {
    fontSize: '18px',
    color: '#fff',
    margin: 0,
  },
  customerLocation: {
    fontSize: '14px',
    color: '#aaa',
    margin: 0,
  },
};

export default Testimonial;