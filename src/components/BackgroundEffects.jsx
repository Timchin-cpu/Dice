const BackgroundEffects = () => {
  return (
    <>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="lightning h-[200px] top-[-50px] left-[15%] animate-lightning" style={{ animationDelay: '0s' }}></div>
        <div className="lightning h-[250px] top-[100px] right-[25%] animate-lightning" style={{ animationDelay: '1.5s' }}></div>
        <div className="lightning h-[180px] top-[300px] left-[70%] animate-lightning" style={{ animationDelay: '3s' }}></div>
        
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-40 animate-float top-[-100px] left-[-100px]"
             style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent)', animationDelay: '0s' }}></div>
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-40 animate-float bottom-[-150px] right-[-150px]"
             style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)', animationDelay: '3s' }}></div>
        <div className="absolute w-[350px] h-[350px] rounded-full blur-[80px] opacity-40 animate-float top-[40%] left-[50%]"
             style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4), transparent)', animationDelay: '6s' }}></div>
      </div>

      {/* Particles Container */}
      <div id="particles-container" className="absolute inset-0 pointer-events-none z-50"></div>
    </>
  );
};

export default BackgroundEffects;
