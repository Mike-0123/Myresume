import React, { useState, useEffect } from 'react';

export default function HelloSection() {
  const roles = ["Fullstack Developer", "Mobile Developer", "UI Designer"];
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullRole = roles[i];

      setCurrentRole(
        isDeleting ? fullRole.substring(0, currentRole.length - 1) : fullRole.substring(0, currentRole.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && currentRole === fullRole) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <section className="bg-gray-900 text-white h-96 flex items-center justify-center">
      <div className="text-center relative top-0">
        <h1 className="text-4xl  md:text-6xl font-bold">
          Hi, I am Mike
          <span className="block mt-2">
            <span className="text-blue-600">{currentRole}</span>
          </span>
        </h1>
      </div>
    </section>
  );
}
