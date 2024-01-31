import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // assuming you're using React Router

const useTrackPageTime = () => {
  const location = useLocation();
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    // Called when the component mounts or location changes
    const handleStart = () => {
      setStartTime(Date.now());
    };

    // Function to send time data to analytics
    const sendTimeToAnalytics = (timeSpent) => {
      if (window.location.hostname !== "localhost") {
        // Replace with your analytics code
        // For example, using Google Analytics:
        ReactGA4.event({
          category: 'User Engagement',
          action: 'Time Spent',
          label: location.pathname,
          value: timeSpent
        });
      }
    };

    // Called when the component unmounts or before re-running the effect
    const handleEnd = () => {
      const endTime = Date.now();
      const timeSpent = endTime - startTime;
      sendTimeToAnalytics(timeSpent);
    };

    // Start tracking
    handleStart();

    // Cleanup function when the component unmounts or before re-running the effect
    return () => handleEnd();
  }, [location]); // Dependency array - re-run the effect when the location changes
};

export default useTrackPageTime;
