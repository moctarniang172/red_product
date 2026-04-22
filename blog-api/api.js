const api = "http://localhost:3000/api";

const token = () => localStorage.getItem("token"); 

const request = async (url, method = "GET", data = null, isFormData = false) => { 

    const headers = {
        "Authorization": token() ? `Bearer ${token()}` : "" 
    };

    if (!isFormData) {
        headers["Content-Type"] = "application/json";
    }

    const res = await fetch(api + url, {
        method, // 
        headers,
        body: data ? (isFormData ? data : JSON.stringify(data)) : null 
    });

    return res.json();
};

const showToast = (message, type = "success") => {
  const toast = document.createElement("div");

  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500"
  };

  toast.className = `${colors[type]} text-white px-4 py-2 rounded shadow mb-2 animate-slide-in`;

  toast.innerText = message;

  document.getElementById("toast").appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};