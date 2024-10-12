import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Array of compliments
const compliments = [
  "You are amazing and talented!",
  "You have the most beautiful smile!",
  "You are the love of my life!",
  "You make my world better every day!",
  "You are truly one of a kind!",
  "You are my inspiration and joy!",
  "Your kindness is a light that brightens my darkest days.",
  "You have a heart of gold, and it shows in everything you do.",
  "Your laughter is like music to my soul.",
  "You make the ordinary feel extraordinary just by being you.",
  "Your beauty radiates from within and lights up the world.",
  "With you by my side, I feel like I can conquer anything.",
  "You inspire me to be the best version of myself every day.",
  "You have the ability to turn my worries into joy with just a smile.",
];

function App() {
  const generateCompliment = () => {
    const randomCompliment =
      compliments[Math.floor(Math.random() * compliments.length)];

    toast.success(randomCompliment, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: "linear-gradient(135deg, #ff7eb3, #ff65a3)", // Gradient background
        color: "#ffffff", // White text
        fontWeight: "bold",
        border: "2px solid #ff3e8e", // Darker pink border
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Shadow effect
      },
    });

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 mb-4 sm:mb-6">
        🌹 A Message for Tamanna Toma 🌹
      </h1>

      <button
        onClick={generateCompliment}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg transition transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
      >
        Get Compliment
      </button>

      <ToastContainer />
    </div>
  );
}

export default App;
