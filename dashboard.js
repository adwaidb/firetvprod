
fetch('data/production.json')
  .then(res => res.json())
  .then(data => {
    const ctx = document.getElementById('prodChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(item => item.date),
        datasets: [{
          label: 'Units Produced',
          data: data.map(item => item.units),
          backgroundColor: '#2c5364'
        }]
      }
    });
  });
