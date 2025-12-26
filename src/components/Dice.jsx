const Dice = ({ value, isRolling }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className={`dice ${isRolling ? 'rolling' : ''}`}>
        <div className="dice-face">
          {[...Array(value)].map((_, i) => (
            <div 
              key={i} 
              className="dice-dot" 
              style={{ animationDelay: `${i * 0.1}s` }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dice;
