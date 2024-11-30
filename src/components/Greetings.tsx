const Greeting = () => {
  const day = new Date();
  const hour = day.getHours();
  let greeting = '';

  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good night';
  }

  return (
    <h1>
      <div className="text-white font-bold text-6xl">
        {greeting}
      </div>
    </h1>
  );
};

export default Greeting;
